import itActsAsFavoriteRestoModel from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getRestaurant(id) {
    if (!id) {
      return false;
    }

    return favoriteRestos.find((resto) => resto.id === id);
  },

  getAllRestaurants() {
    return favoriteRestos;
  },

  putRestaurant(resto) {
    if (!Object.prototype.hasOwnProperty.call(resto, 'id')) {
      return;
    }

    if (this.getRestaurant(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteRestaurant(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestos = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
