function sendPost(body) {
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());
}

// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const requestBody = document.querySelector('#body');
const results = document.querySelector('#results');

const defaultBody = {
  username: 'solo',
  name: 'Han Solo'
};

requestBody.value = JSON.stringify(defaultBody, null, 2);

form.addEventListener('submit', event => {
  event.preventDefault();
  submitButton.disabled = true;
  results.textContent = 'Loading...';

  const body = JSON.parse(requestBody.value);

  sendPost(body)
    .then(data => {
      results.innerHTML = `<h2 class="mb-4 text-xl">Received response:</h2><pre>${JSON.stringify(data, null, 2)}`;
    })
    .catch(error => {
      results.innerHTML = `<h2 class="mb-4 text-xl">Error:</h2><pre>${error.message}`;
    }).finally(() => {
      submitButton.disabled = false;
    });
});
