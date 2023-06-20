let db;

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('fetch-cache');

    request.addEventListener('upgradeneeded', event => {
      // Using out-of-line keys because the database uses URLs as the key,
      // which is not part of the object itself.
      event.target.result.createObjectStore('requests');
    });

    request.addEventListener('success', event => {
      resolve(event.target.result);
    });

    request.addEventListener('error', reject);
  });
}

/**
 * Looks up a potential cached response for a given URL
 * @param db the IndexedDB database
 * @param url the URL to search for
 * @returns a Promise that resolves to the cached data, if any.
 */
function getCachedResponse(db, url) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['requests'], 'readonly');
    const store = transaction.objectStore('requests');
    const request = store.get(url);

    request.addEventListener('success', event => {
      resolve(event.target.result)
    });
    request.addEventListener('error', reject);
  });
}

/**
 * Caches a response body under a given URL.
 * @param db the IndexedDB database
 * @param url the URL to use for the cache key
 * @param body the response body to cache
 * @returns a Promise that resolves once the data is cached
 */
function cacheResponse(db, url, body) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['requests'], 'readwrite');
    const store = transaction.objectStore('requests');

    // The object store uses out-of-line keys so the URL has to be
    // specified separately as the key.
    const request = store.add(body, url);

    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

/**
 * Loads JSON from a remote URL, checking for a cached response first.
 * If there is no cached response, the request is sent.
 * @param db the IndexedDB database
 * @param url the URL to fetch or retrieve from cache
 * @param fetchOptions any options to pass to the fetch call
 * @returns The response body, either cached or from the live request
 */
function getJSON(db, url, fetchOptions) {
  return new Promise(async (resolve, reject) => {
    // If there's a cached response, use that
    const cachedResponse = await getCachedResponse(db, url);
    if (cachedResponse) {
      console.log('Found cached response for URL', url, cachedResponse);
      resolve(cachedResponse);
      return;
    }

    // Otherwise, make the request and cache the result
    try {
      console.log('URL not found in cache, requesting data');
      const response = await fetch(url, fetchOptions);
      const json = await response.json();
      await cacheResponse(db, url, json);
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
}


// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clear button');
const results = document.querySelector('#results');

function clearCache() {
  const transaction = db.transaction(['requests'], 'readwrite');
  const store = transaction.objectStore('requests');
  const request = store.clear();

  request.addEventListener('success', () => {
    const clearResult = document.querySelector('#clearResult');
    clearResult.textContent = '✅ Deleted cached data.';
    setTimeout(() => clearResult.textContent = '', 3000);
  });
}

openDatabase().then(result => {
  db = result;
})

/**
 * Loads a person from the Star Wars API, using Fetch.
 * Checks the cache first to see if it already exists.
 */
async function loadPerson(personId) {
  // Disable the submit button to indicate we're loading the data.
  submitButton.disabled = true;
  results.textContent = 'Loading...';

  try {
    const person = await getJSON(db, `https://swapi.dev/api/people/${personId}`);

    const code = document.createElement('pre');
    code.className = 'overflow-auto';
    code.textContent = JSON.stringify(person, null, 2);
    results.textContent = '';
    results.appendChild(code);
    submitButton.disabled = false;
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  loadPerson(event.target.elements.personId.value);
});

clearButton.addEventListener('click', clearCache);
