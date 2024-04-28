import axios from 'axios';
const apiKey =
  'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
axios.defaults.headers.common['x-api-key'] = apiKey;
const selectInput = document.querySelector('select.breed-select');

export function fetchBreeds() {
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
export function fetchCatByBreed(breedId) {
  const apiUrl = `https://api.thecatapi.com/v1/images/search?${searchParams}`;
  const searchParams = new URLSearchParams({
    breeds_Ids: `${breedId}`,
  });
  return axios
    .get(apiUrl)
    .then(response => {
      console.log(response.data);
      return response.data[0];
    })
    .catch(error => {
      console.log(error);
    });
}
