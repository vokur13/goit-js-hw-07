function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  getBody: document.body,
  changeColorButton: document.querySelector('.change-color'),
  getColorInfoEl: document.querySelector('.color'),
};

refs.changeColorButton.addEventListener('click', onBgcChange);

function onBgcChange() {
  refs.getBody.style.backgroundColor = getRandomHexColor();
  refs.getColorInfoEl.textContent = getRandomHexColor();
}
