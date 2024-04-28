import axios from 'axios';
import Notiflix from 'notiflix';
const apiKey =
  'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
axios.defaults.headers.common['x-api-key'] = apiKey;
const selectInput = document.querySelector('select.breed-select');

export function fetchBreeds() {
  selectInput.setAttribute('hidden', '');
  const apiUrl = 'https://api.thecatapi.com/v1/breeds';
  return axios
    .get(apiUrl)
    .then(response => {
      console.log(response);
      const breeds = response.data;
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.setAttribute('value', breed.id);
        option.textContent = breed.name;
        selectInput.append(option);
      });
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}
export function fetchCatByBreed(breedId) {
  const apiUrl = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(apiUrl)
    .then(response => {
      console.log(response.data);
      return response.data[0];
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}
