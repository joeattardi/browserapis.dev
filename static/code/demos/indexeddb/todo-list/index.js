// Look up some elements and templates.
const todoTemplate = document.querySelector('#todoTemplate');
const form = document.querySelector('form');
const todoElements = document.querySelector('#todos');

initializeTodoList()
  .then(() => getTodos())
  .then(todos => {
    todos.forEach(todo => {
      renderTodo(todo);
    })
  });

function createTodo(name, due) {
  return {
    id: Date.now(),
    name,
    due,
    completed: false
  };
}

function removeTodo(element, todo) {
  // todoList = todoList.filter(t => t !== todo);
  // saveTodoList();
  todoElements.removeChild(element);
}

// Adds a new todo when the form is submitted.
form.addEventListener('submit', event => {
  event.preventDefault();
  const todo = createTodo(
    form.elements.todo.value,
    form.elements.due.valueAsDate
  );

  addTodo(todo)
    .then(() => renderTodo(todo));

  form.elements.todo.value = '';
});

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

  if (todo.due) {
    const dueDate = element.querySelector('.dueDate');
    const formatted = new Intl.DateTimeFormat().format(todo.due);
    dueDate.textContent = `Due: ${formatted}`;
  }

  todoElements.appendChild(element);
}
