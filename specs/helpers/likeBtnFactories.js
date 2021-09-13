import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/restaurant-idb';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-btn-container'),
    likeFABContainer: document.querySelector('#like-fab-container'),
    favoriteDB: FavoriteRestaurantIdb,
    restaurant,
  });
};

export default createLikeButtonPresenterWithResto;
