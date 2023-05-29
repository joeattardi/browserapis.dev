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

  // The FormData object will contain the file content to be sent
  const formData = new FormData(event.target);

  try {
    // Send the POST request with the file's form data
    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body: formData.get('file')
    });

    const body = await response.json();
    const contentType = body.headers['Content-Type'];

    setResultContent(`✅ File uploaded: ${contentType}`);

    // If we got an image, use the data URL that httpbin echoes back
    // in the response to show the image on our page.
    if (contentType.startsWith('image')) {
      const img = document.createElement('img');
      img.src = body.data;
      results.appendChild(img);
    }
  } catch (error) {
    setResultContent(`⚠️ Upload failed: ${error.message}`);
  } finally {
    submitButton.disabled = false;
  }
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
