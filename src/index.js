import axios from 'axios';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
const selectInput = document.querySelector('select.breed-select');

selectInput.addEventListener('click', fetchBreeds);
selectInput.addEventListener('change', event => {
  const choosenBreed = event.target.value;
  fetchCatByBreed(choosenBreed);
});
