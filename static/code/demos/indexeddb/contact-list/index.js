// The IndexedDB database. Will be set once the open operation
// is complete.
let db;

// Open the database.
const request = indexedDB.open('contact-list');

// If upgrade is needed, create the store.
request.addEventListener('upgradeneeded', (event) => {
  db = request.result;

  // New contact objects will be given an auto-generated 
  // `id` property which serves as its key.
  db.createObjectStore('contacts', {
    keyPath: 'id',
    autoIncrement: true,
  });
});

// On success, set the database reference and load the
// contact list.
request.addEventListener('success', () => {
  db = request.result;
  getContacts();
});

request.addEventListener('error', () => {
  console.error('Error opening database:', request.error);
});

/**
 * Queries the database and gets a list of contacts whose name or email
 * matches a search query.
 * @param query the search query string
 */
function searchContacts(query) {
  // An array to hold all contacts with a name containing the query text.
  const results = [];

  // Only querying, so use a readonly transaction.
  const transaction = db.transaction(['contacts'], 'readonly');
  const store = transaction.objectStore('contacts');

  // Cursors are created by the object store
  const request = store.openCursor();

  // The cursor request will emit a `success` event for each object it finds
  request.addEventListener('success', event => {
    const cursor = request.result;
    if (cursor) {
      // Add the contact to the result array if it matches the query.
      if (cursor.value.name.toLowerCase().includes(query.toLowerCase()) ||
        cursor.value.email.toLowerCase().includes(query.toLowerCase())) {
        results.push(cursor.value);
      }

      // Continue to the next record.
      cursor.continue();
    } else {
      renderContacts(results);
    }
  });
}

/**
 * Reads all contacts from the 'contacts' object store.
 */
function getContacts() {
  // Open a read-only transaction - we don't need to write here
  const transaction = db.transaction(['contacts'], 'readonly');

  // Load all records from the object store.
  const store = transaction.objectStore('contacts');
  const request = store.getAll();

  // When complete, render the new list of contacts.
  request.addEventListener('success', () => {
    renderContacts(request.result);
  });

  request.addEventListener('error', () => {
    console.error('Error loading contacts:', request.error);
  });
}

/**
 * Adds a contact to the database.
 * @param contact the contact object to add
 */
function addContact(contact) {
  // This time we need a read-write transaction
  const transaction = db.transaction(['contacts'], 'readwrite');
  const store = transaction.objectStore('contacts');

  // Store the contact in the database. It will receive an auto-incremented
  // `id` property.
  const request = store.put(contact);

  request.addEventListener('success', () => {
    getContacts();
  });

  request.addEventListener('error', () => {
    console.error('Error adding contact:', request.error);
  });
}

/**
 * Deletes a contact from the database. The contact object is
 * expected to have an id property, which we'll use to delete it.
 * 
 * @param contact the contact object to add
 */
function deleteContact(contact) {
  const transaction = db.transaction(['contacts'], 'readwrite');
  const store = transaction.objectStore('contacts');
  const request = store.delete(contact.id);

  request.addEventListener('success', () => {
    getContacts();
  });

  request.addEventListener('error', () => {
    console.error('Error deleting contact:', request.error);
  });
}

/**
 * Renders a list of contacts to the UI.
 * @param contacts the contacts to render, or null to load the contacts from the database first.
 */
async function renderContacts(contacts) {
  const contactList = document.createElement('div');
  contactList.className = 'grid grid-cols-1 md:grid-cols-2 mt-4 gap-4';
  contactList.id = 'contacts';

  contacts.forEach((contact) => {
    const element = contactTemplate.content.cloneNode(true).firstElementChild;
    element.querySelector('.name').textContent = contact.name;
    element.querySelector('.email').textContent = contact.email;
    element.querySelector('.delete').addEventListener('click', (event) => {
      deleteContact(contact);
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

search.querySelector('input').addEventListener('input', event => {
  searchContacts(event.target.value);
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

  addContact(contact);
});
