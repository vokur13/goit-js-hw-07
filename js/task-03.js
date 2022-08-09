const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');

{
  /* <li class="galery__item">
                <img class="galery__img" src="" alt="">
        </li> */
}

const galeryItemMarkup = ({ url, alt }) => {
  return `
        <li class="galery__item">
                <img class="galery__img" src="${url}" alt="${alt}" width="720">
        </li>
        `;
};

const galeryItemMap = images.map(galeryItemMarkup).join('');
console.log(galeryItemMap);

listEl.insertAdjacentHTML('afterbegin', galeryItemMap);
