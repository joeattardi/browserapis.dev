function fetchPerson(personId) {
  // Make the request
  return fetch(`https://swapi.dev/api/people/${personId}`)
    // Parse the response body as an object
    .then(response => response.json())
    // Handle errors, including network and JSON parsing errors
    .catch(error => console.error('Couldn\'t fetch:', error.message));
}

// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const results = document.querySelector('#results');

form.addEventListener('submit', event => {
  event.preventDefault();

    // Disable the submit button to indicate we're loading the data.
    submitButton.disabled = true;

  fetchPerson(event.target.elements.personId.value)
    .then(person => {
      results.innerHTML = `<pre class="overflow-auto">${JSON.stringify(person, null, 2)}</pre>`;
      submitButton.disabled = false;
    });
});
