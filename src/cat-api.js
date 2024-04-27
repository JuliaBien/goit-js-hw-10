import axios from 'axios';
const apiKey =
  'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
axios.defaults.headers.common['x-api-key'] = apiKey;
const selectInput = document.querySelector('select.breed-select');
const catInfoArea = document.querySelector('div.cat-info');

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
  const searchParams = new URLSearchParams({
    breeds_Ids: `${breedId}`,
  });
  const apiUrl = `https://api.thecatapi.com/v1/images/search?&${searchParams}`;
  return axios
    .get(apiUrl)
    .then(response => {
      console.log(response.data);
      const breedData = response.data;
      const catPhoto = document.createElement('img');
      catPhoto.setAttribute('src', breedData.url);
      catPhoto.setAttribute('alt', 'cat photo');
      catPhoto.setAttribute('width', breedData.width);
      catInfoArea.prepend(catPhoto);
    })
    .catch(error => {
      console.log(error);
    });
}
