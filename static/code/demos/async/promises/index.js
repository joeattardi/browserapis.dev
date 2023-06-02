const userForm = document.querySelector('#userForm');
const results = document.querySelector('#results');
const submitButton = document.querySelector('#searchButton')
const personIdField = document.querySelector('#personIdField');

userForm.addEventListener('submit', event => {
  // Prevent the browser from making a POST request with the form
  event.preventDefault();

  // Disable the submit button until the request completes
  submitButton.disabled = true;

  // getPerson returns a `Promise`. Call `then` on the `Promise` object with a some callbacks
  // as descibed below.
  getPerson(personIdField.valueAsNumber)
    .then(
      // If a person was loaded, this is called with the person object
      person => {
        results.innerHTML = `<p class="bg-blue-100 dark:bg-blue-700 p-4 my-4">✅ Found user: ${person.name}</p>`;
        reset();
      }, 
      
      // If an error occurs or the person ID is not found, this is called with the error object
      error => {
        results.innerHTML = `<p class="bg-red-100 dark:bg-red-700 p-4 my-4">⚠️ Error: ${error.message}</p>`;
        reset();
      });
});

/**
 * Resets the form state after searching the Star Wars API.
 */
function reset() {
  // Re-enable the submit button
  submitButton.disabled = false;

  // Clear the text field and set focus to it
  personIdField.value = '';
  personIdField.focus();
}

function getPerson(id) {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => {
      // A 404 does not reject the `Promise`, but it's rejected here
      // to illustrate error handling
      if (response.status === 404) {
        throw new Error('Person not found');
      }

      // This returns another `Promise`
      return response.json()
    });
}
