renderItems();

function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  return keys;
}

document.querySelector('#deleteAll').addEventListener('click', () => {
  localStorage.clear();
  renderItems();
});

function renderItems() {
  const items = document.querySelector('#items');
  items.innerHTML = '';

  const keys = getAllKeys();
  keys.forEach((key) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><button class="delete-button">X</button></td>
      <td>${key}</td>
      <td><div style="max-width: 50vw;" class="whitespace-nowrap overflow-hidden text-ellipsis">${localStorage.getItem(key)}</div></td>
    `;

    const deleteButton = row.querySelector('button');
    deleteButton.addEventListener('click', () => {
      localStorage.removeItem(key);
      renderItems();
    })

    items.appendChild(row);
  });
}
