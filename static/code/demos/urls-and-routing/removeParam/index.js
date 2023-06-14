/**
 * Removes all parameters from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @returns a new URL string with all query parameters removed
 */
function removeQueryParams(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';
  return url.toString();
}

/**
 * Removes a single parameter from an input URL.
 * 
 * @param inputUrl a URL string containing query parameters
 * @param paramName the name of the parameter to remove
 * @returns a new URL string with the given query parameter removed
 */
function removeQueryParameter(inputUrl, paramName) {
  const url = new URL(inputUrl);
  url.searchParams.delete(paramName);
  return url.toString();
}

document.querySelector('#removeSingle').addEventListener('click', event => {
  event.preventDefault();

  const url = document.querySelector('#url').value;
  const param = document.querySelector('#param').value;
  const newUrl = removeQueryParameter(url, param);

  const results = document.querySelector('#results');
  results.classList.remove('hidden');
  results.querySelector('p').innerHTML = newUrl;
})

document.querySelector('#removeAll').addEventListener('click', event => {
  event.preventDefault();

  const url = document.querySelector('#url').value;
  const newUrl = removeQueryParams(url);

  const results = document.querySelector('#results');
  results.classList.remove('hidden');
  results.querySelector('p').innerHTML = newUrl;
});