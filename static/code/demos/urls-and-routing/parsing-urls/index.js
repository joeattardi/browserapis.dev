const form = document.querySelector('form');
const results = document.querySelector('#results');

// The properties of the URL we want to show.
const urlProperties = [
  'host', 'hostname', 'href',
  'origin', 'pathname', 'protocol',
  'search'
];

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const url = new URL(event.target.elements.url.value);
  event.target.elements.url.value = '';

  const card = document.querySelector('#url-card').content.cloneNode(true).firstElementChild;
  const urlDetails = card.querySelector('ul');
  card.querySelector('.url').textContent = url.toString();

  let details = '';
  urlProperties
    .filter(property => url[property].length)
    .forEach(property => {
      details += `
        <li><strong>${property}</strong>: ${url[property]}</li>
      `;
    });
    urlDetails.innerHTML = details;

  document.querySelector('#resultsPlaceholder')?.remove();
  results.insertBefore(card, results.firstElementChild);
});
