// Look up the elements we need.
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const clearButton = document.querySelector('#clear button');
const results = document.querySelector('#results');

let db;

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('swapi-cache');
    request.addEventListener('upgradeneeded', event => {
      db = event.target.result;

      db.createObjectStore('people', {
        keyPath: 'url'
      });
    });

    request.addEventListener('success', event => {
      db = event.target.result;
      resolve(db);
    });

    request.addEventListener('error', reject);
  });
}

function clearCache() {
  const transaction = db.transaction(['people'], 'readwrite');
  const store = transaction.objectStore('people');
  const request = store.clear();

  request.addEventListener('success', () => {
    const clearResult = document.querySelector('#clearResult');
    clearResult.textContent = '✅ Deleted cached data.';
    setTimeout(() => clearResult.textContent = '', 3000);
  });
}

function cachePerson(person) {
  console.log('Caching result:', person);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['people'], 'readwrite');
    const store = transaction.objectStore('people');

    const request = store.put(person);
    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

function getPerson(personId) {
  console.log(`Checking cache for person ${personId}`);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['people'], 'readonly');
    const store = transaction.objectStore('people');
    
    const request = store.get(`https://swapi.dev/api/people/${personId}/`);
    request.addEventListener('success', event => {
      resolve(event.target.result);
    });
    request.addEventListener('error', reject);
  });
}

initializeDatabase();

/**
 * Loads a person from the Star Wars API, using Fetch.
 * Checks the cache first to see if it already exists.
 */
async function loadPerson(personId) {
  // Disable the submit button to indicate we're loading the data.
  submitButton.disabled = true;
  results.textContent = 'Loading...';

  const status = document.createElement('div');
  status.className = 'text-xl p-4 my-4';

  let person = await getPerson(personId);
  if (person) {
    console.log(`Got person ${personId} from cache`);
    status.textContent = '📀 Loaded from IndexedDB cache';
    status.classList.add('bg-green-200', 'dark:bg-green-800');
  } else {
    const response = await fetch(`https://swapi.dev/api/people/${personId}`);
    person = await response.json();

    if (response.status === 200) {
      status.textContent = '🌎 Loaded from Internet';
      status.classList.add('bg-blue-200', 'dark:bg-blue-800');
      console.log(`Got person ${personId} from network`);
      await cachePerson(person);
    } else {
      status.classList.add('bg-red-200');
      status.textContent = '⛔️ Failed to load person';
    }
  }

  const code = document.createElement('pre');
  code.className = 'overflow-auto';
  code.textContent = JSON.stringify(person, null, 2);
  results.textContent = '';
  results.appendChild(status);
  results.appendChild(code);
  submitButton.disabled = false;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  loadPerson(event.target.elements.personId.value);
});

clearButton.addEventListener('click', clearCache);
