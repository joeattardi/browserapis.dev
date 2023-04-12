const form = document.querySelector('form');
const results = document.querySelector('#results');

// The properties of the URL we want to show.
const urlProperties = [
  'host', 'hostname', 'href', 'hash',
  'origin', 'pathname', 'protocol',
  'search'
];

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const url = new URL(event.target.elements.url.value);
  event.target.elements.url.value = '';

  const card = document.querySelector('#url-card').content.cloneNode(true).firstElementChild;
  const urlDetails = card.querySelector('dl');
  card.querySelector('.url').textContent = url.toString();

  let details = '';
  urlProperties
    .filter(property => url[property].length)
    .forEach(property => {
      details += `
        <dt class="font-bold">${property}</dt>
        <dd class="ml-4 font-mono">${url[property]}</dd>
      `;
    });
    urlDetails.innerHTML = details;

  document.querySelector('#resultsContainer').className = 'mt-4 block';
  results.insertBefore(card, results.firstElementChild);
});
