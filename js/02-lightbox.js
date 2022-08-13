import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const container = document.querySelector('.gallery');
const pictureMap = createImgGalleryMap(galleryItems);

container.insertAdjacentHTML('beforeend', pictureMap);

function createImgGalleryMap(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
