const gallery = document.querySelector('.gallery');
const arrayGalleryItem = images.map(({ preview, original, description }) =>
    `<li class="gallery-item">
<a class="gallery-link" href="${original}">
<img
class="gallery-image"
src="${preview}" 
data-source="${original}" 
alt="${description}"/>
</a>
</li>`);
const galleryItemString = arrayGalleryItem.join('');
gallery.insertAdjacentHTML("beforeend", galleryItemString);
