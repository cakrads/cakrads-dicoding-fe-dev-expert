import FavoriteMovieIdb from '../../data/restaurant-idb';
import { createCardRestaurant, createContainerCard, createAlertContainer } from '../templates/template-creator';
import { createFavoriteContainer } from '../templates/template-favorite';

const Favorites = {
  async render() {
    return `
      ${createFavoriteContainer()}
    `;
  },

  async afterRender() {
    const elRestaurant = document.querySelector('#favorite-restaurant');
    const elAlertInfo = document.querySelector('#restaurant-alert-info');
    elRestaurant.innerHTML = createContainerCard();

    try {
      const restaurants = await FavoriteMovieIdb.getAllRestaurants();

      if (!restaurants.length) {
        const message = 'You didn\'t choose any Favorite Restaurant';
        elAlertInfo.innerHTML = createAlertContainer(message, { type: 'info' });
        return;
      }

      elRestaurant.innerHTML = '';
      restaurants.forEach((restaurant) => {
        elRestaurant.innerHTML += createCardRestaurant(restaurant);
      });
    } catch ({ message }) {
      elRestaurant.innerHTML = '';
      elAlertInfo.innerHTML = createAlertContainer(message, { type: 'error' });
    }
  },
};

export default Favorites;
