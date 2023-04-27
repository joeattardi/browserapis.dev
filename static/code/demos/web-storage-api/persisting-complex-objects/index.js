// Constant indicating the key within local storage that the todo list
// is saved under.
const storageKey = 'todos';

// Look up some elements and templates.
const todoTemplate = document.querySelector('#todoTemplate');
const form = document.querySelector('form');
const todoElements = document.querySelector('#todos');

// Stores the todo items.
let todoList = loadTodoList();

/**
 * Takes the curent todo list and saves it to local storage.
 */
function saveTodoList() {
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}

function createTodo(name, due) {
  return {
    id: Date.now(),
    name,
    due,
    completed: false,

    // Serializes to JSON. 
    // We extract the timestamp value from the due Date object,
    // all other fields are serialized as is.
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        due: this.due.getTime(),
        completed: this.completed
      };
    }
  }
}

/**
 * Deserializes the timestamp back to a Date object
 * when parsing to-do items from local storage.
 * 
 * This function will be called for each key/value pair
 * in the object being parsed.
 */
function reviver(key, value) {
  // Construct a new Date instance with the timestamp for the
  // `due` property
  if (key === 'due') {
    return new Date(value);
  }

  // All other values are kept as is.
  return value;
}

/**
 * Loads the todo list from local storage.
 * @returns the previously saved list, or an empty array if there was no saved list.
 */
function loadTodoList() {
  const list = JSON.parse(localStorage.getItem(storageKey), reviver) || [];

  list.forEach(todo => renderTodo(todo));

  return list;
}

// Adds a new todo when the form is submitted.
form.addEventListener('submit', event => {
  event.preventDefault();
  const todo = createTodo(
    form.elements.todo.value,
    form.elements.due.valueAsDate
  );

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

  const dueDate = element.querySelector('.dueDate');
  const formatted = new Intl.DateTimeFormat().format(todo.due);
  dueDate.textContent = `Due: ${formatted}`;

  todoElements.appendChild(element);
}
