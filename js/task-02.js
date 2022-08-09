const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeList = options => {
  return options.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;
    return itemEl;
  });
};

// const elements = makeList(ingredients);
// listEl.append(...elements);

listEl.append(...makeList(ingredients));
