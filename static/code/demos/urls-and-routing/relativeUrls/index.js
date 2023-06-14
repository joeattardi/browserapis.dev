document.querySelector('#urlForm').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#result').classList.remove('hidden');

  try {
    const url = new URL(
      event.target.elements.relativePath.value,
      event.target.elements.baseUrl.value
    );  
    document.querySelector('#result p').textContent = url.href;
  } catch (error) {
    document.querySelector('#result p').textContent = '⚠️ Invalid URL';
  }
});