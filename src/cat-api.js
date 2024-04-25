import axios from 'axios';
const selectInput = document.querySelector('select.breed-select');
export function fetchBreeds() {
  const apiKey =
    'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
  axios.defaults.headers.common['x-api-key'] = apiKey;
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
    });
}
