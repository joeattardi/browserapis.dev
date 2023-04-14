// Save a reference to the color picker
const colorPicker = document.querySelector('#colorPicker');

// Look for a previously saved color and set it, if found.
const savedColor = localStorage.getItem('savedColor');
if (savedColor) {
  // We found a saved color - set it in the color picker
  colorPicker.value = savedColor;
}

// When the color is changed, save it to local storage.
colorPicker.addEventListener('change', () => {
  localStorage.setItem('savedColor', colorPicker.value);
});
