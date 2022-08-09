const controlInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

controlInput.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
}
