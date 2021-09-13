import RestaurantRepository from '../data/restaurant-repository';
import { createCustomerReviews } from '../views/templates/template-detail';
import { createAlertContainer } from '../views/templates/template-creator';

const ReviewInitiator = {
  async init(props) {
    const {
      id,
      reviewListContainer,
      reviewForm,
      ratingsContainer = [],
      customerReviews = [],
    } = props;

    this.id = id;
    this.listContainer = reviewListContainer;
    this.form = reviewForm;
    this.data = customerReviews;
    this.ratingsContainer = ratingsContainer;

    this.listenFormSubmit();
  },

  async renderListReview() {
    this.listContainer.innerHTML = createCustomerReviews(this.data);
  },

  async listenFormSubmit() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('customerReviews', customerReviews);

      const payload = {
        id: this.id,
        name: e.srcElement[0].value,
        review: e.srcElement[1].value,
      };

      try {
        const { customerReviews } = await RestaurantRepository.addNewReview(payload);
        this.data = customerReviews;
        this.successSendReview();
      } catch ({ message }) {
        this.failedSendReview(message);
      } finally {
        this.form.reset();
      }
    });
  },

  successSendReview() {
    const alertOptions = { type: 'success', close: true, autoClose: true };
    const successContainer = this.form.children[0];
    successContainer.innerHTML = createAlertContainer('Thank you for Review', alertOptions);

    this.afterSuccess();
  },

  afterSuccess() {
    this.renderListReview();
    this.ratingsContainer.forEach((item) => {
      const container = item;
      container.innerHTML = this.data.length;
    });
  },

  failedSendReview(message) {
    const alertOptions = { type: 'error', close: true, autoClose: true };
    const failContainer = this.form.children[1];
    failContainer.innerHTML = createAlertContainer(message, alertOptions);
  },
};

export default ReviewInitiator;
