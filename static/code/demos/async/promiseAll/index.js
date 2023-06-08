// Loading three users at once
Promise.all([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(users => {
  // users is an array of user objects - the values returned from
  // the parallel getUser calls
  document.querySelector('#loader').remove();
  users.forEach(user => renderUser(user));
}).catch(error => {
  // If any of the above Promises are rejected
  console.error('One of the users failed to load:', error);
});

const list = document.querySelector('#users');

function renderUser(user) {
  const item = document.createElement('li');
  item.textContent = user.name;
  list.appendChild(item);
}

const users = [
  { id: 1, name: 'Jean-Luc Picard' },
  { id: 2, name: 'William Riker' },
  { id: 3, name: 'Data' }
];

function getUser(userId) {
  return new Promise(resolve => {
    // Use setTimeout to simluate request latency
    setTimeout(() => {
      resolve(users.find(user => user.id === userId));
    }, 1500);
  });
}
