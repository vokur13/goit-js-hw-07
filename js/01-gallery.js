import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const pictureMap = createPictureGalleryMarkup(galleryItems);
const modal = document.querySelector('.js-lightbox');
const modalImg = modal.querySelector('.lightbox__image');

let activeIndex = null;

// console.log(galleryItems);

container.addEventListener('click', onContainerClick);
container.insertAdjacentHTML('beforeend', pictureMap);
modal.addEventListener('click', modalClose);

function createPictureGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        loading="lazy"
        class="gallery__image lazyload"
        src="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join('');
}

function onContainerClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    window.addEventListener('keydown', onKeyDown);
    modal.classList.add('is-open');
    modalImg.src = e.target.src;
    galleryItems.forEach((element, index) => {
      if (element.original === e.target.src) {
        activeIndex = index;
      }
    });
  }
}

function modalClose(e) {
  if (!e.target.classList.contains('lightbox__image')) {
    window.removeEventListener('keydown', onKeyDown);
    modal.classList.remove('is-open');
    modalImg.src = '';
  }
}

function onKeyDown(e) {
  if (e.code === 'ArrowRight' && activeIndex < galleryItems.length - 1) {
    activeIndex += 1;
    modalImg.src = galleryItems[activeIndex].original;
    return;
  }
  if (e.code === 'ArrowLeft' && activeIndex > 0) {
    activeIndex -= 1;
    modalImg.src = galleryItems[activeIndex].original;
    return;
  }
  if (e.code === 'ArrowRight' && activeIndex === galleryItems.length - 1) {
    activeIndex = 0;
    modalImg.src = galleryItems[activeIndex].original;
    return;
  }
  if (e.code === 'ArrowLeft' && activeIndex === 0) {
    activeIndex = galleryItems.length - 1;
    modalImg.src = galleryItems[activeIndex].original;
    return;
  }
}

// if ('loading' in HTMLImageElement.prototype) {
//   onLazySizesLoad();
// } else {
//   // Dynamically import the LazySizes library
//   onLazySizesLibraryAdd();
// }

// function onLazySizesLoad() {
//   const lazyImg = document.querySelectorAll('img[loading="lazy"]');
//   lazyImg.forEach(img => {
//     img.src = img.dataset.src;
//   });
// }

// function onLazySizesLibraryAdd() {
//   const script = document.createElement('script');
//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
//   script.integrity =
//     'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
//   script.crossOrigin = 'anonymous';
//   script.referrerpolicy = 'no-referrer';
//   document.body.appendChild(script);
// }

// function onContainerClick(e) {
//   e.preventDefault();
//   const isGalleryItemEl = e.target.classList.contains('gallery__image');
//   if (!isGalleryItemEl) {
//     return;
//   }
//   const linkEl = e.target;
//   const originalURL = linkEl.dataset.src;

//   onOpenModal(originalURL);
// }

// function onOpenModal(url) {
//   const instance = basicLightbox.create(`
//       <img src=${url}>
//   `);
//   instance.show();

//   window.addEventListener('keydown', onCloseModal);

//   function onCloseModal(e) {
//     const key = e.code;
//     if (key === 'Escape') {
//       instance.close();
//       window.removeEventListener('keydown', onCloseModal);
//     }
//   }
// }

// // Оригинальная разметка

// // `<div class="gallery__item">
// //         <a class="gallery__link" href="${original}">
// //         <img
// //         class="gallery__image"
// //         src="${preview}"
// //         data-source="${original}"
// //         alt="${description}"
// //         />
// //         </a>
// //         </div>`;
