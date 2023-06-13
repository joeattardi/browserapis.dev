function isLocalStorageAvailable() {
  try {
    // Local storage is available if the property exists
    return typeof window.localStorage !== 'undefined';
  } catch (error) {
    console.log('err');
    // If window.localStorage exists but the user is blocking local 
    // storage, the attempting to read the property throws an exception.
    // If this happens, consider local storage not available.
    return false;
  }
}

const result = document.querySelector('#result');
if (isLocalStorageAvailable()) {
  result.textContent = '✅ Local storage is available';
} else {
  result.textContent = '⚠️ Local storage is not available';
}
