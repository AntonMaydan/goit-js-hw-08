// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);
console.log(SimpleLightbox);

const galleryEl = document.querySelector(".gallery");

function makeGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join("");
}
const list = makeGalleryItemsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", list);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

