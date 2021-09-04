const createFABLike = () => `
  <button aria-label="like this restaurant" id="like-fab" class="mobile-like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFABLiked = () => `
  <button aria-label="unlike this restaurant" id="like-fab" class="mobile-like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createButtonLike = () => `
  <button class="btn bg-plain" id="like-button">
    <i class="fa fa-heart-o" aria-hidden="true"></i> Save
  </button>
`;

const createButtonLiked = () => `
  <button class="btn bg-plain" id="like-button">
    <i class="fa fa-heart" aria-hidden="true"></i> Save
  </button>
`;

const createFavoriteContainer = () => `
  <div class="restaurants">
    <div class="container">
      <h2 tabindex="0">Your Favorite Restaurants</h2>
      <br />
      <div id="favorite-restaurant" class="resto-data"></div>
    </div>
  </div>
`;

export {
  createFABLike,
  createFABLiked,
  createButtonLike,
  createButtonLiked,
  createFavoriteContainer,
};
