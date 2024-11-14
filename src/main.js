import { fetchImages } from './js/pixabay-api';
import {
  createImageCards,
  renderGallery,
  clearGallery,
} from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'css-loader/dist/css-loader.min.css';

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }

  showLoader();
  clearGallery(galleryContainer);

  fetchImages(query)
    .then(images => {
      const markup = createImageCards(images);
      renderGallery(galleryContainer, markup);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message || 'Something went wrong!',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
