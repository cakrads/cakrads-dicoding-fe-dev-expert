import UrlParser from '../../routes/url-parser';
import RestaurantRepository from '../../data/restaurant-repository';
import { renderDetailRestaurant, renderLoadingDetail } from '../templates/template-detail';

const Detail = {

  async render() {
    return `
      <div id="detail-restaurant" class="detail-page container"></div>
    `;
    // <div id="likeButtonContainer"></div>
    // <button aria-label="unlike this restaurant" id="likeButton" class="mobile-like">
    //   <i class="fa fa-heart-o" aria-hidden="true"></i>
    // </button>
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = renderLoadingDetail();

    const { restaurant } = await RestaurantRepository.detailRestaurant(url.id);
    restaurantContainer.innerHTML = renderDetailRestaurant(restaurant);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: restaurant.id,
    //     title: restaurant.title,
    //     overview: restaurant.overview,
    //     backdrop_path: restaurant.backdrop_path,
    //     vote_average: restaurant.vote_average,
    //   },
    // });
  },
};

export default Detail;
