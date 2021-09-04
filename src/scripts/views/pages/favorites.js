import FavoriteMovieIdb from '../../data/restaurant-idb';
import CardRestaurant from '../templates/template-creator';
import { createFavoriteContainer } from '../templates/template-favorite';

const Favorites = {
  async render() {
    return `
      ${createFavoriteContainer()}
    `;
  },

  async afterRender() {
    const elRestaurant = document.querySelector('#favorite-restaurant');

    try {
      const restaurants = await FavoriteMovieIdb.getAllRestaurants();

      if (!restaurants.length) {
        elRestaurant.innerHTML = 'You didn\'t choose any Favorite Restaurant';
        return;
      }

      restaurants.forEach((restaurant) => {
        elRestaurant.innerHTML += CardRestaurant(restaurant);
      });
    } catch ({ message }) {
      elRestaurant.innerHTML = message;
    }
  },
};

export default Favorites;
