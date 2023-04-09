import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");
const gallery = createGallery(galleryItems);
ul.insertAdjacentHTML("beforeend", gallery);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
}

let galleryModal = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: "250ms",
  captionPosition: "bottom",
});
