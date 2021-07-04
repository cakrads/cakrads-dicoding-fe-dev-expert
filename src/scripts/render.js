import DATA from './../DATA.json';

const restaurantsElement = document.querySelector('#resto-data');

function _renderRestaurants() {
  const restaurants = { ...DATA };
  const menuItem = restaurants.restaurants.map((item) => {
    return (`<article class="resto-item">
        <img src="${item.pictureId}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="rating">${item.rating}</div>
        <div class="city">${item.city}</div>
      </article>`);
  });

  restaurantsElement.innerHTML = menuItem.join('');
}

_renderRestaurants();