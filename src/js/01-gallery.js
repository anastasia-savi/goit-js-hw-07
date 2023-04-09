import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ul = document.querySelector("ul");
const gallery = createGallery(galleryItems);
ul.insertAdjacentHTML("beforeend", gallery);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`;
    })
    .join("");
}

ul.addEventListener("click", clickOnGallery);
function clickOnGallery(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}">
`);

  instance.show(() => {
    window.addEventListener("keydown", escape);
  });
  function escape(event) {
    if (event.code === "Escape") {
      instance.close(() => {
        window.removeEventListener("keydown", escape);
      });
    }
  }
}
