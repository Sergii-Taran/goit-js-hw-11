import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createImageCards(images) {
  return images
    .map(image => {
      return `
        <a href="${image.largeImageURL}" class="gallery__item">
          <div class="image-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              <p><strong>Likes:</strong> ${image.likes}</p>
              <p><strong>Views:</strong> ${image.views}</p>
              <p><strong>Comments:</strong> ${image.comments}</p>
              <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
          </div>
        </a>`;
    })
    .join('');
}

export function renderGallery(container, markup) {
  container.innerHTML = markup;
  const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
  });
  lightbox.refresh();
}

export function clearGallery(container) {
  container.innerHTML = '';
}
