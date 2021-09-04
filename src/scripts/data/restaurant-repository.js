import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantRepository {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addNewReview(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    return response.json();
  }
}

export default RestaurantRepository;
