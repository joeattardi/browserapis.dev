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

function sendPost() {
  submitButton.disabled = true;
  results.textContent = 'Loading...';

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: requestBody.value,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      results.innerHTML = `<h2 class="mb-4 text-xl">Received response:</h2><pre>${JSON.stringify(data, null, 2)}`;
      submitButton.disabled = true;
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  sendPost();
});
