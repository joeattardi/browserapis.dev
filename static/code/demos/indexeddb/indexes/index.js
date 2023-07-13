// A template element that defines the structure of each todo item
const todoTemplate = document.querySelector('#todoTemplate');

// The todo form. Submitting this form will add a new todo.
const form = document.querySelector('form');

// The list element that will contain the todo items.
const todoElements = document.querySelector('#todos');

// A checkbox to toggle whether or not to show completed todos.
const showCompletedCheckbox = document.querySelector('#showCompleted');

// The IndexedDB database. This will be set to the database object once it
// has been opened.
let db;

// A flag to indicate whether or not you want to show completed todos.
let showCompleted = false;

// Initialize the database, either opening the existing one
// or creating a new one.
const request = indexedDB.open('todos-index');

// Handle the upgradeneeded event, creating the object store
// and its index.
request.addEventListener('upgradeneeded', (event) => {
  db = request.result;

  // New todo objects will be given an auto-generated 
  // `id` property which serves as its key.
  const todosStore = db.createObjectStore('todos', {
    keyPath: 'id',
    autoIncrement: true,
  });

  // Create an index on the `completed` property called `completedIndex`.
  todosStore.createIndex('completedIndex', 'completed');
});

// At this point the database is ready. Save it to the `db` variable
// and begin a query to render the todo list.
request.addEventListener('success', () => {
  db = request.result;
  renderTodoList();
});

// Log any errors that might have occurred.
request.addEventListener('error', () => {
  console.error('Error opening database:', request.error);
});

/**
 * Queries the database for all todos, then renders each todo item
 * in the list.
 */
function renderTodoList() {
  // Only querying, so a readonly transaction will suffice.
  const transaction = db.transaction(['todos'], 'readonly');
  const store = transaction.objectStore('todos');

  // Access the store's `completed` index.
  const index = store.index('completedIndex');

  // If `showCompleted` is `true, use a key range to include both
  // incomplete (0) and completed (1). Otherwise, just use incomplete (0).
  const keyRange = showCompleted ?
    IDBKeyRange.bound(0, 1) :
    IDBKeyRange.only(0);

  // Get all objects indexed within the given key range.
  const request = index.getAll(keyRange);

  request.addEventListener('success', () => {
    // Remove the old todos
    todoElements.innerHTML = '';

    // The result is an array of todo objects. Render each one
    // as a todo list item.
    request.result.forEach(todo => {
      renderTodo(todo);
    })
  });

  request.addEventListener('error', () => {
    console.error('Error loading todos:', request.error);
  });
}

/**
 * Adds a new todo item to the database.
 * @param todo The new todo item to add
 */
function addTodo(todo) {
  const transaction = db.transaction(['todos'], 'readwrite');
  const store = transaction.objectStore('todos');
  const request = store.add(todo);

  request.addEventListener('success', () => {
    // The todo item is added, but it's not visible yet.
    // The success handler needs to query the database again and
    // render the updated list of todos.
    renderTodoList();
  });

  request.addEventListener('error', () => {
    console.error('Error adding todo:', request.error);
  });
}

/**
 * Updates a todo item in the database.
 * @param todo The existing todo item to update
 */
function updateTodo(todo) {
  const transaction = db.transaction(['todos'], 'readwrite');
  const store = transaction.objectStore('todos');
  const request = store.put(todo);

  request.addEventListener('success', () => {
    // Re-query and re-render the list so that it reflects the
    // new todo item's data
    renderTodoList();    
  });

  request.addEventListener('error', () => {
    console.error('Error updating todo:', request.error);
  });
}

// Update the `showCompleted` flag when the checkbox is toggled.
showCompletedCheckbox.addEventListener('click', () => {
  showCompleted = !showCompleted;
  renderTodoList();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const todo = {
    name: form.elements.todo.value,
    completed: 0
  };

  // Clear the todo input so a new one can be entered.
  form.elements.todo.value = '';
  addTodo(todo);
});

/**
 * Renders an individual todo item as a list item in the DOM.
 * @param todo The todo item to render
 */
function renderTodo(todo) {
  // Make a new list item from the todo template.
  const element = todoTemplate.content.cloneNode(true).firstElementChild;
  const id = todo.id;
  const label = element.querySelector('.todo label');
  label.textContent = todo.name;
  label.setAttribute('for', id);
  if (todo.completed) {
    label.classList.add('line-through');
  }

  const checkbox = element.querySelector('input');
  checkbox.id = id;
  checkbox.addEventListener('click', event => {
    if (event.target.checked) {
      todo.completed = 1;
    } else {
      todo.completed = 0;
    }

    updateTodo(todo);
  });
  if (todo.completed) {
    checkbox.checked = true;
  }

  todoElements.appendChild(element);
}
