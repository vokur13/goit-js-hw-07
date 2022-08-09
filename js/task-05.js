const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const textOutputContent = textOutput.firstChild;

textInput.addEventListener('input', onInputText);

function onInputText(event) {
  event.currentTarget.value === ''
    ? (textOutput.textContent = textOutputContent.textContent)
    : (textOutput.textContent = event.currentTarget.value);
}
