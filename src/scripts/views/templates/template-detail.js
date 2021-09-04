import CONFIG from '../../globals/config';

export const createFoodMenus = ({ foods = [] }) => {
  if (foods.length === 0) return 'No Foods Here';

  let food = '';
  foods.forEach((item) => {
    food += `<li>${item.name}</li>`;
  });

  return `<ul>${food}</ul>`;
};

export const createDrinkMenus = ({ drinks = [] }) => {
  if (drinks.length === 0) return 'No Drinks Here';

  let drink = '';
  drinks.forEach((item) => {
    drink += `<li>${item.name}</li>`;
  });

  return `<ul>${drink}</ul>`;
};

export const createCategories = (categories = []) => {
  if (categories.length === 0) return 'No Drinks Here';

  let drink = '';
  categories.forEach((item) => {
    drink += `<li>${item.name}</li>`;
  });

  return `<ul>${drink}</ul>`;
};

export const createCustomerReviews = (customerReviews) => {
  if (customerReviews.length === 0) return '<center>No Review Here</center>';

  let customerReview = '';
  customerReviews.forEach((item) => {
    customerReview += `<article>
    <h4>${item.name}</h4>
    <p>${item.review}</p>
    <span>${item.date}</span>
  </article>`;
  });

  return customerReview;
};

export const createDetailRestaurant = (restaurants = {}) => {
  const {
    id, name, description, city, address, pictureId, categories = [],
    menus = { foods: [], drinks: [] }, rating, customerReviews = [],
  } = restaurants;

  return `
    <article>
      <header class="detail-title">
        <div class="detail-title-main">
          <div>
            <h1>${name}</h1>
          </div>
          <div id="like-btn-container">
            <button class="btn bg-plain" data-id="${id}">
              <i class="fa fa-heart-o" aria-hidden="true"></i> Save
            </button>
          </div>
        </div>
        <div class="detail-title-info">
          <span>
            <i class="fa fa-star" aria-hidden="true"></i> ${rating} (${customerReviews.length} reviews)
          </span>
          <span class="sparate"> · </span>
          <span>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <address>${city}, ${address}</address>
          </span>
        </div>
      </header>
      <div class="detail-content">
        <div class="detail-picture">
          <picture>
            <source media="(min-width:900px)" srcset="${`${CONFIG.BASE_IMAGE_URL}large/${pictureId}`}">
            <source media="(min-width:600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}medium/${pictureId}`}">
            <img src="${`${CONFIG.BASE_IMAGE_URL}small/${pictureId}`}" alt="${name}">
          </picture>
        </div>
        <div class="detail-description card">
          <section>
            <h2 class="title">Description</h2>
            <p>${description}</p>
          </section>
        </div>
        <div class="detail-menus card">
          <section>
            <h2 class="title">Menus</h2>
            <article>
              <h3>Foods</h3>
              ${createFoodMenus(menus)}
            </article>
            <br />
            <article>
              <h3>Drink</h3>
              ${createDrinkMenus(menus)}
            </article>
            <br/>
            <br/>
            <h2 class="title">Categories</h2>
            ${createCategories(categories)}
          </section>
        </div>
        <div class="detail-reviews card">
          <section>
            <div class="title">
              <h2>Reviews</h2>
              <div>
                <i class="fa fa-star" aria-hidden="true"></i> ${rating} (${customerReviews.length} reviews)
              </div>
            </div>
            ${createCustomerReviews(customerReviews)}
          </section>
          <section class="form-review">
            <form class="form">
              <div class="field">
                <label for="review-name">Name</label>
                <input id="review-name" type="text" placeholder="your great name here" required>
              </div>
              <div class="field">
                <label for="review-message">Your Review</label>
                <textarea id="review-message" placeholder="what do you think about this restaurant" required></textarea>
              </div>
              <button class="btn bg-purple">
                <i class="fa fa-send" aria-hidden="true"></i> SEND
              </button>
            </form>
          </section>
        </div>
      </div>
    </article>
  `;
};

export const createLoadingDetail = () => `
  <div class="skeleton-detail">
    <div class="loading title"></div>
    <div class="loading sub-title"></div>
    <div class="loading picture"></div>
    <div class="loading card"></div>
  </div>
`;
