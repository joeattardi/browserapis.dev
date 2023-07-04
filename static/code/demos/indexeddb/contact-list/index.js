/**
 * Queries the database and gets a list of contacts whose name or email
 * matches a search query.
 * @param db the IndexedDB database
 * @param query the search query string
 * @returns a Promise that resolves to the matching contacts
 */
function searchContacts(db, query) {
  return new Promise((resolve, reject) => {
    // An array to hold all contacts with a name containing the query text.
    const results = [];

    // Only querying, so use a readonly transaction.
    const transaction = db.transaction(['contacts'], 'readonly');
    const store = transaction.objectStore('contacts');

    // Cursors are created by the object store
    const request = store.openCursor();

    // The cursor request will emit a `success` event for each object it finds
    request.addEventListener('success', event => {
      const cursor = event.target.result;
      if (cursor) {
        // Add the contact to the result array if it matches the query.
        if (cursor.value.name.toLowerCase().includes(query.toLowerCase()) || 
            cursor.value.email.toLowerCase().includes(query.toLowerCase())) {
          results.push(cursor.value);
        }

        // Continue to the next record.
        cursor.continue();
      } else {
        // All done, resolve the promise with the matching contacts.
        resolve(results);
      }
    });
  });
}

let db;

/**
 * Initializes the IndexedDB database.
 */
function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('contact-list');
    request.addEventListener('upgradeneeded', (event) => {
      db = event.target.result;

      // New contact objects will be given an auto-generated 
      // `id` property which serves as its key.
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true,
      });
    });

    request.addEventListener('success', (event) => {
      db = event.target.result;
      resolve(db);
    });

    request.addEventListener('error', reject);
  });
}

/**
 * Reads all contacts from the 'contacts' object store.
 * @returns a Promise that will resolve to the list of contacts.
 */
function getContacts() {
  return new Promise((resolve, reject) => {
    // Open a read-only transaction - we don't need to write here
    const transaction = db.transaction(['contacts'], 'readonly');

    // Load all records from the object store.
    const store = transaction.objectStore('contacts');
    const request = store.getAll();

    // When complete, resolve the Promise with the contact list.
    request.addEventListener('success', (event) =>
      resolve(event.target.result)
    );
    request.addEventListener('error', reject);
  });
}

/**
 * Adds a contact to the database.
 * @param contact the contact object to add
 * @returns a Promise that resolves when the contact is added
 */
function addContact(contact) {
  return new Promise((resolve, reject) => {
    // This time we need a read-write transaction
    const transaction = db.transaction(['contacts'], 'readwrite');
    const store = transaction.objectStore('contacts');

    // Store the contact in the database. It will receive an auto-incremented
    // `id` property.
    const request = store.put(contact);

    // Resolve the promise once the put operation is complete.
    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

/**
 * Deletes a contact from the database. The contact object is
 * expected to have an id property, which we'll use to delete it.
 * 
 * @param contact the contact object to add
 * @returns a Promise that resolves when the contact is deleted
 */
function deleteContact(contact) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['contacts'], 'readwrite');
    const store = transaction.objectStore('contacts');
    const request = store.delete(contact.id);
    request.addEventListener('success', resolve);
    request.addEventListener('error', reject);
  });
}

/**
 * Renders a list of contacts to the UI.
 * @param contacts the contacts to render, or null to load the contacts from the database first.
 */
async function renderContacts(contacts) {
  if (!contacts) {
    contacts = await getContacts();
  }

  const contactList = document.createElement('div');
  contactList.className = 'grid grid-cols-1 md:grid-cols-2 mt-4 gap-4';
  contactList.id = 'contacts';

  contacts.forEach((contact) => {
    const element = contactTemplate.content.cloneNode(true).firstElementChild;
    element.querySelector('.name').textContent = contact.name;
    element.querySelector('.email').textContent = contact.email;
    element.querySelector('.delete').addEventListener('click', (event) => {
      deleteContact(contact).then((e) => { console.log('derp', e); renderContacts(); });
    });
    contactList.appendChild(element);
  });

  document.querySelector('#contacts').replaceWith(contactList);

  emptyMessage.classList.toggle('hidden', contacts.length > 0);
}

const addForm = document.querySelector('#addForm');
const contactTemplate = document.querySelector('#contactTemplate');
const search = document.querySelector('#search');
const emptyMessage = document.querySelector('#emptyMessage');

initializeDatabase().then(() => renderContacts());

search.querySelector('input').addEventListener('input', event => {
  searchContacts(db, event.target.value)
    .then(searchResults => {
      renderContacts(searchResults);
    });
});

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const contact = {
    name: addForm.elements.name.value,
    email: addForm.elements.email.value,
  };

  addForm.elements.name.value = '';
  addForm.elements.email.value = '';
  addForm.elements.name.focus();

  addContact(contact).then(() => renderContacts());
});
