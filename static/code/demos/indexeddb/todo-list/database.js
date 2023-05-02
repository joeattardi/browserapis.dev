let db;

function initializeTodoList() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('todos', 5);
    // Create the object store if the database didn't already exist.
    request.addEventListener('upgradeneeded', (event) => {
      const db = event.target.result;

      // Each todo item will have an `id` property which will be the primary key.
      db.createObjectStore('todos', {
        keyPath: 'id',
      });
    });

    request.addEventListener('success', (event) => {
      db = event.target.result;
      resolve(db);
    });

    request.addEventListener('error', error => {
      reject(error);
    })
  });
}

/**
 * Adds a new to-do item to the database.
 * @param todo The new to-do item to add.
 * @returns A `Promise` that resolves once the to-do is added.
 */
function addTodo(todo) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['todos'], 'readwrite');
    const todosStore = transaction.objectStore('todos');
    const request = todosStore.add(todo);

    // Resolve the promise once the add transaction is complete.
    request.addEventListener('success', resolve);

    // Reject on error.
    request.addEventListener('error', reject);
  });
}

/**
 * Queries the database for all to-do items.
 * @return a `Promise` that resolves to an array containing the to-do items.
 */
function getTodos() {
  return new Promise((resolve, reject) => {
    // Create a read-only transaction for the `todos` object store.
    const transaction = db.transaction(['todos'], 'readonly');

    // Retrieve the read-only object store.
    const todosStore = transaction.objectStore('todos');

    // Create the `getAll` request and wait for the `success` event.
    const request = todosStore.getAll();
    request.addEventListener('success', event => {
      // The array of to-do items is stored in the `result` property
      resolve(event.target.result);
    });

    // Always handle errors!
    request.addEventListener('error', reject);
  });
}
