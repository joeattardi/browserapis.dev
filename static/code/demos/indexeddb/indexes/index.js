let db;
let showCompleted = false;

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('todos-index');
    request.addEventListener('upgradeneeded', (event) => {
      db = event.target.result;

      // New todo objects will be given an auto-generated 
      // `id` property which serves as its key.
      const todosStore = db.createObjectStore('todos', {
        keyPath: 'id',
        autoIncrement: true,
      });

      // Create an index on the `completed` property.
      todosStore.createIndex('completed', 'completed');
    });

    request.addEventListener('success', (event) => {
      resolve(event.target.result);
    });

    request.addEventListener('error', reject);
  });
}

function addTodo(db, todo) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['todos'], 'readwrite');
    const store = transaction.objectStore('todos');
    const request = store.add(todo);

    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

function getTodos(db, showCompleted) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['todos'], 'readonly');
    const store = transaction.objectStore('todos');
    const index = store.index('completed');

    const keyRange = showCompleted ?
      IDBKeyRange.bound('false', 'true') :
      IDBKeyRange.only('false');

    const request = index.getAll(keyRange);

    request.addEventListener('success', event => resolve(event.target.result));
    request.addEventListener('error', reject);
  });
}

function updateTodo(db, todo) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['todos'], 'readwrite');
    const store = transaction.objectStore('todos');
    const request = store.put(todo);

    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

initializeDatabase().then(result => {
  db = result;
  renderTodoList(db);
});

// Look up some elements and templates.
const todoTemplate = document.querySelector('#todoTemplate');
const form = document.querySelector('form');
const todoElements = document.querySelector('#todos');
const showCompletedCheckbox = document.querySelector('#showCompleted');

showCompletedCheckbox.addEventListener('click', async () => {
  showCompleted = !showCompleted;
  renderTodoList();
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const todo = {
    name: form.elements.todo.value,
    completed: 'false'
  };

  await addTodo(db, todo);
  renderTodoList();

  form.elements.todo.value = '';
});

async function renderTodoList() {
  const todos = await getTodos(db, showCompleted);
  todoElements.innerHTML = '';

  todos.forEach(todo => {
    renderTodo(todo);
  })
}

function renderTodo(todo) {
  const element = todoTemplate.content.cloneNode(true).firstElementChild;
  const id = todo.id;
  const label = element.querySelector('.todo label');
  label.textContent = todo.name;
  label.setAttribute('for', id);
  if (todo.completed === 'true') {
    label.classList.add('line-through');
  }

  const checkbox = element.querySelector('input');
  checkbox.id = id;
  checkbox.addEventListener('click', async event => {
    if (event.target.checked) {
      todo.completed = 'true'
    } else {
      todo.completed = 'false';
    }

    await updateTodo(db, todo);
    renderTodoList();
  });
  if (todo.completed === 'true') {
    checkbox.checked = true;
  }

  todoElements.appendChild(element);
}