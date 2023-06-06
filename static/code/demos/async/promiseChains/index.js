function getPersonHomeworldWithPromise(personId) {
  const results = document.querySelector('#results');

  // Call `getPerson` to start the chain
  getPerson(personId)
    // Success! Loaded the person's data. Next call `getHomeworld` with this person,
    // and return the new `Promise` returned from `getHomeworld`.
    .then(person => getHomeworld(person))

    // Homeworld was loaded, now show the results.
    .then(result => {
      results.className = 'bg-blue-100 dark:bg-blue-700 p-4 my-4';
      results.textContent = `✅ ${result.person.name} homeworld: ${result.homeworld.name}`;
    })
    
    // Handle any errors that happened either in `getPerson` or `getHomeworld`.
    .catch(error => {
      results.className = 'bg-red-100 dark:bg-red-700 p-4 my-4';
      results.textContent = `⚠️ Error: ${error.message}`;
    })
    
    // Regardless of the outcome, finally reset the form state.
    .finally(() => {
      reset();
    });
}



// The rest of the code is supporting code for reading the form values,
// handling the submission, and updating form state.

const personIdField = document.querySelector('#personIdField');
const submitButton = document.querySelector('#searchButton');

/**
 * Handles the form submission and begins the API calls.
 */
document.querySelector('#userForm').addEventListener('submit', event => {
  // Prevent the browser from making a POST request with the form
  event.preventDefault();

  // Disable the submit button until the request completes
  submitButton.disabled = true;

  getPersonHomeworldWithPromise(personIdField.valueAsNumber);
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

/**
 * Loads a person from the Star Wars API.
 * Throws an error if the user is not found.
 * 
 * @param {number} id the person ID
 * @returns the person data for the given ID
 */
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

function getHomeworld(person) {
  return fetch(person.homeworld)
    .then(response => response.json())
    .then(homeworld => ({ person, homeworld }));
}
