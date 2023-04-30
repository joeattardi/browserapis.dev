// Look up some elements and templates.
const todoTemplate = document.querySelector('#todoTemplate');
const form = document.querySelector('form');
const todoElements = document.querySelector('#todos');

// Adds a new todo when the form is submitted.
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

/**
 * Removes a todo item from the list, saves the updated list,
 * and removes the associated DOM element.
 */
function removeTodo(element, todo) {
  todoList = todoList.filter(t => t !== todo);
  saveTodoList();
  todoElements.removeChild(element);
}

/**
 * Renders a new todo item to the DOM.
 */
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
