// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const results = document.querySelector('#results');

/**
 * Loads a person from the Star Wars API, using Fetch.
 */
function loadPerson(personId) {
  // Disable the submit button to indicate we're loading the data.
  submitButton.disabled = true;
  results.textContent = 'Loading...';

  fetch(`https://swapi.dev/api/people/${personId}`)
    .then(response => response.json())
    .then(person => {
      results.innerHTML = `<pre class="overflow-auto">${JSON.stringify(person, null, 2)}</pre>`;
      submitButton.disabled = false;
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  loadPerson(event.target.elements.personId.value);
});
