import galeryItems from './galery-items.js'

const refs = {
    gallery: document.querySelector('.gallery'),
    modal: document.querySelector('.lightbox'),
    lightBox: document.querySelector('.lightbox__content'),
    lightBoxImage: document.querySelector('.lightbox__image'),
    closeButton: document.querySelector('.lightbox__button'),
}

function getImage(arr) {
    const list = 
        arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link"
    href= '${original}'>
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
  </a>
</li>` ).join('')
    return list;
}

refs.gallery.insertAdjacentHTML('beforeend', getImage(galeryItems));
refs.gallery.addEventListener('click', oneTagsClick);

function oneTagsClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    }
    showModal();

    const largeImage = event.target.dataset.source;

    getLargeImage(largeImage);

}

refs.closeButton.addEventListener('click', closeModal)

function getLargeImage(url) {
    refs.lightBoxImage.src = url;
}

function showModal() {
    refs.modal.classList.add('is-open');
}

function closeModal() {
    refs.modal.classList.remove('is-open');
    refs.lightBoxImage.src = '';

}
