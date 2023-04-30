function initializeTodoList() {
  const request = indexedDB.open('todos');

  // Create the object store if the database didn't already exist.
  request.addEventListener('upgradeneeded', event => {
  const db = event.target.result;

  // Each todo item will have an `id` property which will be the primary key.
  db.createObjectStore('todos', {
    keyPath: 'id'
  });
});
}

initializeTodoList();
