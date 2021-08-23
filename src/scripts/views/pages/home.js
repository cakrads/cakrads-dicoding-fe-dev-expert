import RestaurantRepository from '../../data/restaurant-repository';
import CardRestaurant from '../templates/template-creator';
import {
  renderHero, renderHeadLine, renderServices, renderRestaurant,
} from '../templates/template-home';

const HomePage = {
  async render() {
    return `
      ${renderHero()}
      ${renderHeadLine()}
      ${renderServices()}
      ${renderRestaurant()}
    `;
  },

  async afterRender() {
    const elRestaurant = document.querySelector('#list-restaurant');

    try {
      const response = await RestaurantRepository.listRestaurant();
      const { restaurants = [] } = response;

      if (!restaurants.length) {
        elRestaurant.innerHTML = 'Sorry, There\'s no restaurant available';
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

export default HomePage;
