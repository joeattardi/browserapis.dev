// Constant indicating the key within local storage that the todo list
// is saved under.
const storageKey = 'todos';

// Stores the todo items.
let todoList = loadTodoList();

/**
 * Takes the curent todo list and saves it to local storage.
 */
function saveTodoList() {
  localStorage.setItem(storageKey, JSON.stringify(todoList));
}

/**
 * Loads the todo list from local storage.
 * @returns the previously saved list, or an empty array if there was no saved list.
 */
function loadTodoList() {
  const list = JSON.parse(localStorage.getItem(storageKey)) || [];

  list.forEach(todo => renderTodo(todo));

  return list;
}
