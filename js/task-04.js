let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

const decrement = () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);

const increment = () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
