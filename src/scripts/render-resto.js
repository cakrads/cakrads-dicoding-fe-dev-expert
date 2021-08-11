import DATA from '../DATA.json';

const elRestaurant = document.querySelector('#resto-data');

function _renderRestaurants() {
  const restaurants = { ...DATA };
  const menuItem = restaurants.restaurants.map((item) => {
    return (`<article class="resto-item">
        <figure>
          <img src="${item.pictureId}" alt="${item.name}">
        </figure>
        <div class="item-body">
          <div class="title">
            <h3>
              <a href="#" tabindex="0" title="Restauran ${item.name}">
                ${item.name}
              </a>
            </h3>
            <div class="rating">★ ${item.rating}</div>
          </div>
          <p tabindex="0">${item.description}</p>
        </div>
        <div class="badge bg-purple">${item.city}</div>
      </article>`);
  });

  elRestaurant.innerHTML = menuItem.join('');
}

_renderRestaurants();