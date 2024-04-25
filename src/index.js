import axios from 'axios';
import { fetchBreeds } from './cat-api';
const selectInput = document.querySelector('select.breed-select');

selectInput.addEventListener('click', fetchBreeds);
