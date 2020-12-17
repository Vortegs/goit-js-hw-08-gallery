import galeryItems from './galery-items.js'
const gallery = document.querySelector('.gallery');


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

gallery.insertAdjacentHTML('beforeend', getImage(galeryItems));




