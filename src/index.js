import axios from 'axios';
import { fetchBreeds } from './cat-api';
const apiUrl = 'https://api.thecatapi.com/v1/breeds';
const apiKey =
  'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
axios.defaults.headers.common['x-api-key'] = apiKey;
const selectInput = document.querySelector('select.breed-select');

selectInput.addEventListener('click', fetchBreeds);
