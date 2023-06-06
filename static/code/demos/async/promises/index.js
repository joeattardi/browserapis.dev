getUsers()
  // This function is called when the user list has been loaded.
  .then(userList => {
    // Hide the loader and render the users in the list.
    document.querySelector('#loader').remove();
    const list = document.querySelector('#users');

    userList.forEach(user => {
      const item = document.createElement('li');
      item.textContent = user.name;
      list.appendChild(item);
    })
  }).catch(error => { // Called if there is an error
    console.error('Failed to load user list:', error);
  });

function getUsers() {
  const users = [
    { name: 'Jean-Luc Picard' },
    { name: 'William Riker' },
    { name: 'Data' }
  ];

  return new Promise(resolve => {
    // Use setTimeout to simluate request latency
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
}