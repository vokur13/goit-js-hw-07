import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const pictureMap = createPictureGalleryMarkup(galleryItems);
// console.log(galleryItems);

container.insertAdjacentHTML('beforeend', pictureMap);

function createPictureGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
}
