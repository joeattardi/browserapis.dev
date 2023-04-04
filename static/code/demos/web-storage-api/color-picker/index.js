const colorPicker = document.querySelector('#colorPicker');

// Look for a previously saved color and set it, if found.
const savedColor = localStorage.getItem('savedColor');
if (savedColor) {
  colorPicker.value = savedColor;
}

// When the color is changed, save it to local storage.
colorPicker.addEventListener('change', () => {
  localStorage.setItem('savedColor', colorPicker.value);
});
