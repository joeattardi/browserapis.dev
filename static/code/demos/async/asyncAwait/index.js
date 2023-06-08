// A function must be declared with the `async` keyword in order to use `await` in its body.
async function renderUserNames() {
  try {
    // Equivalent to getUsers().then(...)
    const userList = await getUsers();
    userList.forEach(user => {
      renderUser(user);
    });
  } catch (error) { // Equivalent to .catch(...)
    console.error('Failed to load user list:', error);
  }
}

renderUserNames();
  
const list = document.querySelector('#users');

function renderUser(user) {
  const item = document.createElement('li');
  item.textContent = user.name;
  list.appendChild(item);
}

function getUsers() {
  const users = [
    { name: 'Jean-Luc Picard' },
    { name: 'William Riker' },
    { name: 'Data' }
  ];

  return new Promise(resolve => {
    // Use setTimeout to simluate request latency
    setTimeout(() => {
      document.querySelector('#loader').remove();
      resolve(users);
    }, 1500);
  });
}
