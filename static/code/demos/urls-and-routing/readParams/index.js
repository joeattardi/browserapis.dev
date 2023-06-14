/**
 * Takes a URL and returns an array of its query parameters.
 */
function getQueryParameters(inputUrl) {
  // Can't use an object here because there may be multiple
  // parameters with the same key, and we want to return all parameers.
  const result = [];

  const url = new URL(inputUrl);

  // Add each key/value pair to the result array
  url.searchParams.forEach((value, key) => {
    result.push({ key, value });
  });

  // Results are ready!
  return result;
}

document.querySelector('#urlForm').addEventListener('submit', event => {
  event.preventDefault();

  const results = document.querySelector('#results');

  results.classList.remove('hidden');
  const list = results.querySelector('ul');
  list.innerHTML = '';

  const params = getQueryParameters(event.target.elements.url.value);
  params.forEach(param => {
    list.innerHTML += `<li>${param.key}=${param.value}</li>`;
  });
});
