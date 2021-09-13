import UrlParser from '../../routes/url-parser';
import FavoriteRestoIdb from '../../data/restaurant-idb';
import RestaurantRepository from '../../data/restaurant-repository';
import { createDetailRestaurant, createLoadingDetail } from '../templates/template-detail';
import { createAlertContainer } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import ReviewInitiator from '../../utils/review-initiator';

const Detail = {

  async render() {
    return `
      <div id="detail-restaurant" class="detail-page container"></div>
      <div id="like-fab-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createLoadingDetail();

    try {
      const { restaurant } = await RestaurantRepository.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createDetailRestaurant(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#like-btn-container'),
        likeFABContainer: document.querySelector('#like-fab-container'),
        favoriteDB: FavoriteRestoIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          description: restaurant.description,
          city: restaurant.city,
        },
      });

      ReviewInitiator.init({
        id: url.id,
        reviewListContainer: document.querySelector('#review-list-container'),
        reviewFormContainer: document.querySelector('#review-form-container'),
        reviewForm: document.querySelector('#review-form'),
        customerReviews: restaurant.customerReviews,
        ratingsContainer: [
          document.querySelector('#total-header-review'),
          document.querySelector('#total-customer-review'),
        ],
      });
    } catch (message) {
      restaurantContainer.innerHTML = createAlertContainer(message, { type: 'error' });
    }
  },
};

export default Detail;
