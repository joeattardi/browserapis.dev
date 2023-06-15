function uploadFile(form) {
  // Assume the form has a file input with the name `file`
  const formData = new FormData(form);
  const fileData = formData.get('file');
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: fileData
  })
    .then(response => response.json());
}

const form = document.querySelector('#fileForm');
const submitButton = document.querySelector('#submitButton');
const fileInput = document.querySelector('#fileInput');
const results = document.querySelector('#results');

form.addEventListener('submit', async event => {
  // Stop the default form submission. The form is going to be sent
  // via the Fetch API instead.
  event.preventDefault();

  // Disable the submit button, just while the request is in progress
  submitButton.disabled = true;

  uploadFile(event.target)
    .then(response => {
      const contentType = response.headers['Content-Type'];
      setResultContent(`✅ File uploaded: ${contentType}`);

      // If we got an image, use the data URL that httpbin echoes back
      // in the response to show the image on our page.
      if (contentType.startsWith('image')) {
        const img = document.createElement('img');
        img.src = response.data;
        results.appendChild(img);
      }
    })
    .catch(error => {
      setResultContent(`⚠️ Upload failed: ${error.message}`);
    }).finally(() => {
      submitButton.disabled = false;
    });
});

/**
 * Sets a result status message after the request.
 */
function setResultContent(textContent) {
  const resultLabel = document.createElement('p');
  resultLabel.className = 'text-xl my-4';
  resultLabel.textContent = textContent;
  results.innerHTML = '';
  results.appendChild(resultLabel);
}
