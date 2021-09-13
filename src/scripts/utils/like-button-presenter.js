// import FavoriteRestaurantIdb from '../data/restaurant-idb';
import {
  createButtonLike, createButtonLiked, createFABLike, createFABLiked,
} from '../views/templates/template-favorite';

const LikeButtonInitiator = {
  async init({
    likeButtonContainer, likeFABContainer, favoriteDB, restaurant,
  }) {
    this.likeButtonContainer = likeButtonContainer;
    this.likeFABContainer = likeFABContainer;
    this.db = favoriteDB;
    this.restaurant = restaurant;

    await this.renderFavoriteButton();
  },

  async renderFavoriteButton() {
    const { id } = this.restaurant;

    if (await this.isRestaurantExist(id)) {
      this.renderLikedFAB();
      this.renderLikedButton();
    } else {
      this.renderLikeFAB();
      this.renderLikeButton();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this.db.getRestaurant(id);
    return !!restaurant;
  },

  renderLikeButton() {
    this.likeButtonContainer.innerHTML = createButtonLike();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await this.db.putRestaurant(this.restaurant);
      this.renderFavoriteButton();
    });
  },

  renderLikedButton() {
    this.likeButtonContainer.innerHTML = createButtonLiked();

    const likeButton = document.querySelector('#like-button');
    likeButton.addEventListener('click', async () => {
      await this.db.deleteRestaurant(this.restaurant.id);
      this.renderFavoriteButton();
    });
  },

  renderLikeFAB() {
    this.likeFABContainer.innerHTML = createFABLike();

    const likeButton = document.querySelector('#like-fab');
    likeButton.addEventListener('click', async () => {
      await this.db.putRestaurant(this.restaurant);
      this.renderFavoriteButton();
    });
  },

  renderLikedFAB() {
    this.likeFABContainer.innerHTML = createFABLiked();

    const likeButton = document.querySelector('#like-fab');
    likeButton.addEventListener('click', async () => {
      await this.db.deleteRestaurant(this.restaurant.id);
      this.renderFavoriteButton();
    });
  },
};

export default LikeButtonInitiator;
