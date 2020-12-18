import galeryItems from './galery-items.js'

const refs = {
    gallery: document.querySelector('.gallery'),
    modal: document.querySelector('.lightbox')
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
    console.log(event.target.dataset.source);
}

function showModal() {
    refs.modal.classList.add('is-open');
}

