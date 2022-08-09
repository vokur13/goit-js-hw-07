const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', checkInputLength);

function checkInputLength(event) {
  console.log(event.currentTarget.value.length);
  event.currentTarget.value.length === Number(textInput.dataset.length)
    ? textInput.classList.add('valid')
    : textInput.classList.add('invalid');
}
