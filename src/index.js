import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_n1sdJMxkaVhtsdFqp4t39Y2DcAMa77V9diAbkhM1vhRFAuJZYL01uyeRM1Hiae7s';
const selectInput = document.querySelector('select.breed-select');
axios
  .get('https://api.thecatapi.com/v1/breeds')
  .then(response => {
    console.log(response);
  })
  .then(data => {
    data.forEach(element => {
      const breedId = element.id;
      const breedName = element.name;
      selectInput.innerHTML = `<option value="${breedId}">${breedName}</option>`;
    });
  })
  .catch(error => {
    console.log(error);
  });
