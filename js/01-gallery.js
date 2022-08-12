import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const pictureMap = createPictureGalleryMarkup(galleryItems);
// console.log(galleryItems);

container.addEventListener('click', onContainerClick);

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

function onContainerClick(e) {
  e.preventDefault();
  const isGalleryItemEl = e.target.classList.contains('gallery__image');
  if (!isGalleryItemEl) {
    return;
  }
  const linkEl = e.target;
  const originalURL = linkEl.dataset.source;
  console.log('originalURL:', originalURL);
}

//

document.querySelector('button.image').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`
    )
    .show();
};
