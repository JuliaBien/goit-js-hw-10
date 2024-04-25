export function fetchBreeds() {
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
