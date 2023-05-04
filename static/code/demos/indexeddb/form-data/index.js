const form = document.querySelector('form');

const userId = 'sysadmin';

let db;

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('users');
    request.addEventListener('upgradeneeded', event => {
      db = event.target.result;

      db.createObjectStore('profileData');
    });

    request.addEventListener('success', event => {
      db = event.target.result;
      resolve()
    });

    request.addEventListener('error', reject);
  });
}

function loadProfile() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['profileData'], 'readonly');
    const store = transaction.objectStore('profileData');

    const request = store.get(userId);
    request.addEventListener('success', event => {
      resolve(event.target.result);
    });
    request.addEventListener('error', reject);
  });
}

function saveProfile(profile) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['profileData'], 'readwrite');
    const store = transaction.objectStore('profileData');

    const request = store.put(profile, userId);
    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  // IndexedDB can store nested objects!
  const profile = {
    firstName: form.elements.firstName.value,
    lastName: form.elements.lastName.value,
    dob: form.elements.dob.valueAsDate,
    address: {
      street: form.elements.address.value,
      city: form.elements.city.value,
      state: form.elements.state.value
    }
  };

  saveProfile(profile);
});

// Open the database, load the profile data, and populate the form controls.
initializeDatabase()
  .then(() => loadProfile())
  .then(profile => {
    form.elements.firstName.value = profile.firstName;
    form.elements.lastName.value = profile.lastName;
    form.elements.address.value = profile.address.street;
    form.elements.city.value = profile.address.city;
    form.elements.state.value = profile.address.state;
    form.elements.dob.valueAsDate = profile.dob;
  });
  