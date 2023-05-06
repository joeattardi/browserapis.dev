// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const results = document.querySelector('#results');

/**
 * Loads a person from the Star Wars API, using
 * XMLHttpRequest.
 */
function loadPerson(personId) {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    // The event target is the XHR itself; it contains a 
    // responseText property that we can use to create a JavaScript object from
    // the JSON text.
    const person = JSON.parse(event.target.responseText);

    // Re-enable the submit button.
    submitButton.disabled = false;
    console.log('Got person:', person);

    results.innerHTML = `<pre class="overflow-auto">${JSON.stringify(person, null, 2)}</pre>`;
  });

  // Handle any potential errors with the request.
  // This only handles network errors. If the request 
  // returns an error status like 404, the `load` event still fires
  // where you can inspect the status code.
  request.addEventListener('error', err => {
    console.log('Error!', err);
  });

  results.textContent = 'Loading...';

  // Disable the submit button to indicate we're loading the data.
  submitButton.disabled = true;
  
  request.open('GET', `https://swapi.dev/api/people/${personId}`);
  request.send();
}

form.addEventListener('submit', event => {
  event.preventDefault();

  loadPerson(event.target.elements.personId.value);
});
