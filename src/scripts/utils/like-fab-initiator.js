import FavoriteRestaurantIdb from '../data/restaurant-idb';
import { createFABLike, createFABLiked } from '../views/templates/template-favorite';

const LikeFABInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;

    await this.renderFAB();
  },

  async renderFAB() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLikedFAB();
    } else {
      this.renderLikeFAB();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLikeFAB() {
    this.likeButtonContainer.innerHTML = createFABLike();

    const likeButton = document.querySelector('#like-fab');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this.restaurant);
      this.renderFAB();
    });
  },

  renderLikedFAB() {
    this.likeButtonContainer.innerHTML = createFABLiked();

    const likeButton = document.querySelector('#like-fab');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this.restaurant.id);
      this.renderFAB();
    });
  },

};

export default LikeFABInitiator;
