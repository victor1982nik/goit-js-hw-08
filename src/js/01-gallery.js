import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
//console.log(SimpleLightbox);

const galleryRef = document.querySelector('.gallery');

render(galleryItems);

function render(gallery) {
    const arr = gallery.map(({original, preview, description }) => {                 
        return  `<li><a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a></li>`;        
    }).join('');
    
    galleryRef.insertAdjacentHTML('beforeend', arr); 
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
gallery.on('show.simplelightbox', function (e) {
	console.log(e);
});