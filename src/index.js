import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';

const selectInput = document.querySelector('select.breed-select');
const catInfoArea = document.querySelector('div.cat-info');
const loader = document.querySelector('p.loader');
const error = document.querySelector('p.error');
error.style.display = 'none';
loader.style.display = 'none';

const settingSlimSelect = {
  placeholderText: 'Choose your cat',
  openPosition: 'up',
};
const slim = new SlimSelect(selectInput, settingSlimSelect);
window.addEventListener('DOMContentLoaded', () => {
  fetchBreeds();
  selectInput.removeAttribute('hidden');
});

// selectInput.addEventListener('click', () => {
//   fetchBreeds();
//   selectInput.removeAttribute('hidden');
// });
selectInput.addEventListener('change', event => {
  const breedId = event.currentTarget.value;
  catInfoArea.setAttribute('hidden', '');
  fetchCatByBreed(breedId)
    .then(catInfo => {
      catInfoArea.innerHTML = `
    <img src="${catInfo.url}" alt="Cat Image"/>
    <h2>${catInfo.breeds[0].name}</h2>
    <p>${catInfo.breeds[0].description}</p>
    <p>Temperament: ${catInfo.breeds[0].temperament}</p>S
    `;
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      loader.style.display = 'none';
      catInfoArea.removeAttribute('hidden');
    });
});
