document.querySelector('#urlForm').addEventListener('submit', event => {
  event.preventDefault();

  const url = new URL(event.target.elements.url.value);
  const results = document.querySelector('#results');

  results.classList.remove('hidden');
  const list = results.querySelector('ul');
  list.innerHTML = '';

  url.searchParams.forEach((value, key) => {
    list.innerHTML += `<li>${key}=${value}</li>`;
  });
});
