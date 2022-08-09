function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

const refs = {
  inputEl: controlsEl.firstElementChild,
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

refs.inputEl.addEventListener('input', onNumberGet);
refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onNumberGet(event) {
  return event.currentTarget.value;
}

function createBoxes() {
  let size = 20;
  const boxElArr = [];
  for (let index = 0; index < refs.inputEl.value; index += 1) {
    const box = document.createElement('div');
    size += 10;
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElArr.push(box);
  }
  boxesEl.append(...boxElArr);
}

function destroyBoxes() {
  boxesEl.innerHTML = ' ';
}
