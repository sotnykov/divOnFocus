const textField = document.getElementById('myInput');
const divElement = document.getElementById('myDiv');

textField.addEventListener('focus', () => {
  divElement.style.display = 'inline-block';
});

textField.addEventListener('blur', () => {
  divElement.style.display = 'none';
});