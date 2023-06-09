// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const results = document.querySelector('#results');

/**
 * Sends a GET request to the specified URL. Returns a Promise that will resolve to the
 * JSON body parsed as an object, or will reject if there is an error or the response is not
 * valid JSON.
 */
function loadJSON(url) {
  // Create a new Promise object, performing the async work inside the
  // constructor function.
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    // If the request is successful, parse the JSON response and
    // resolve the `Promise` with the resulting object
    request.addEventListener('load', event => {
      // Wrap the JSON.parse call in a try/catch block just in case
      // the response body is not valid JSON.
      try {
        resolve(JSON.parse(event.target.responseText));
      } catch (error) {
        // There was an error parsing the response body.
        // Reject the `Promise` with this error.
        reject(error);
      }
    });

    // If the request fails, reject the `Promise` with the
    // error that was emitted
    request.addEventListener('error', error => {
      reject(error);
    });

    // Set the target URL and send the request
    request.open('GET', url);
    request.send();
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  submitButton.disabled = true;
  loadJSON(`https://swapi.dev/api/people/${event.target.elements.personId.value}`)
    .then(person => {
      results.innerHTML = `<pre class="overflow-auto">${JSON.stringify(person, null, 2)}</pre>`;
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      submitButton.disabled = false;
    });
});
