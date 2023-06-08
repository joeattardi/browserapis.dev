function getPostTitles(userId) {
  return getUser(userId)
    // Callback is called with the loaded user object
    .then(user => {
      console.log(`Getting posts for ${user.name}`);
      // This `Promise` is also returned from `.then`
      return getPosts(user);
    })
    // Calling `then` on the `getPosts` `Promise`
    .then(posts => {
      // Returns another Promise that will resolve to an array of post titles
      return posts.map(post => post.title);
    })
    // Called if either getUser or getPosts are rejected
    .catch(error => {
      console.error('Error loading data:', error);
    });
}

const list = document.querySelector('#posts');

getPostTitles(1)
  .then(postTitles => {
    postTitles.forEach(title => {
      const item = document.createElement('li');
      item.textContent = title;
      list.appendChild(item);      
    });
  });

// Simulates some functions that would, in real life,
// make network requests.
function getUser(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Henry Jones, Jr.'
      });
    }, 1000);
  });
}

function getPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: 'A Historic Find in Cairo'},
        { title: 'My Review: Club Obi-Wan' },
        { title: 'My Trip to Venice' },
      ]);
    }, 2000);
  });
}
