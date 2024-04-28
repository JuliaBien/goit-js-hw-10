import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
const selectInput = document.querySelector('select.breed-select');
const catInfoArea = document.querySelector('div.cat-info');

selectInput.addEventListener('click', fetchBreeds);
selectInput.addEventListener('change', event => {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(catInfo => {
      catInfoArea.innerHTML = `
    <img src="${catInfo.url}" alt="Cat Image"/>
    <h2>${catInfo.breeds[0].name}</h2>
    <p>${catInfo.breeds[0].description}</p>
    <p>Temperament: ${catInfo.breeds[0].temperament}</p>
    `;
    })
    .catch(error => {
      console.error(error);
    });
});
