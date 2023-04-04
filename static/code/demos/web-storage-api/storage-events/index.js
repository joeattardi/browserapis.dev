const storageKey = 'todos';

function saveTodoList() {
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}

function loadTodoList() {
  const list = JSON.parse(localStorage.getItem(storageKey)) || [];

  list.forEach(todo => renderTodo(todo));

  // Listen for changes from other tabs and synchronize our local data
  window.addEventListener('storage', event => {
    // If our to-do list key was changed, replace the current list
    if (event.key === storageKey) {
      console.log('To-do list was changed in another tab');
      todoList = JSON.parse(event.newValue);

      // Remove and re-render all to-do items to match the new data
      while (todoElements.firstElementChild) {
        todoElements.removeChild(todoElements.firstElementChild);
      }

      todoList.forEach(todo => renderTodo(todo));
    }
  });

  return list;
}

const todoTemplate = document.querySelector('#todoTemplate');
const form = document.querySelector('form');

const todoElements = document.querySelector('#todos');

let todoList = loadTodoList();

form.addEventListener('submit', event => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    name: form.elements.todo.value,
    completed: false
  };
  todoList.push(todo);

  saveTodoList();
  renderTodo(todo);

  form.elements.todo.value = '';
});

function removeTodo(element, todo) {
  todoList = todoList.filter(t => t !== todo);
  saveTodoList();
  todoElements.removeChild(element);
}

function renderTodo(todo) {
  const element = todoTemplate.content.cloneNode(true).firstElementChild;
  const id = Date.now();
  const label = element.querySelector('.todo label');
  label.textContent = todo.name;
  label.setAttribute('for', id);

  const checkbox = element.querySelector('input');
  checkbox.id = id;
  checkbox.addEventListener('click', event => {
    if (event.target.checked) {
      removeTodo(element, todo);
    }
  });

  todoElements.appendChild(element);
}
