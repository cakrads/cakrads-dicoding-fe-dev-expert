import RestaurantRepository from '../../data/restaurant-repository';
import { createCardRestaurant, createAlertContainer, createContainerCard } from '../templates/template-creator';
import {
  createHero, createHeadLine, createServices, createRestaurantContainer,
} from '../templates/template-home';

const HomePage = {
  async render() {
    return `
      ${createHero()}
      ${createHeadLine()}
      ${createServices()}
      ${createRestaurantContainer()}
    `;
  },

  async afterRender() {
    const elRestaurant = document.querySelector('#list-restaurant');
    elRestaurant.innerHTML = createContainerCard();

    try {
      const response = await RestaurantRepository.listRestaurant();
      const { restaurants = [] } = response;

      if (!restaurants.length) {
        elRestaurant.innerHTML = '';
        elRestaurant.innerHTML = 'Sorry, There\'s no restaurant available';
        return;
      }

      elRestaurant.innerHTML = '';
      restaurants.forEach((restaurant) => {
        elRestaurant.innerHTML += createCardRestaurant(restaurant);
      });
    } catch ({ message }) {
      elRestaurant.innerHTML = '';
      const elAlertInfo = document.querySelector('#restaurant-alert-info');
      elAlertInfo.innerHTML = createAlertContainer(message, { type: 'error' });
    }
  },

};

export default HomePage;
