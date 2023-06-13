function getAllKeys() {
  const keys = [];

  for (let i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }

  return keys;
}

const keys = getAllKeys();
const list = document.querySelector('#keyList');
keys.forEach(key => {
  const item = document.createElement('li');
  item.textContent = key;
  list.appendChild(item);
});
