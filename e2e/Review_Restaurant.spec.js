const GET_DETAIL = require('./mock/get-detail.mock');
const POST_REVIEW = require('./mock/post-review.mock');

const reviewName = 'codecept';
const reviewMessage = 'My Review From Codecept. Should used mock letter';

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('should show form revision exist and can filled', async ({ I }) => {
  I.click('.resto-item a');
  I.seeInCurrentUrl('detail');

  I.fillField('Name', reviewName);
  I.seeInField('Name', reviewName);

  I.fillField('Your Review', reviewMessage);
  I.seeInField('Your Review', reviewMessage);
});

Scenario('should prevent submit if data form empty', ({ I }) => {
  I.click('.resto-item a');
  I.seeInCurrentUrl('detail');

  I.click('SEND');

  // review name empty
  I.seeAttributesOnElements('alert-info', { type: 'error' });
  I.seeAttributesOnElements('alert-info', { message: 'please fill your name' });

  I.fillField('Name', reviewName);
  I.click('SEND');

  // review message empty
  I.seeAttributesOnElements('alert-info', { type: 'error' });
  I.seeAttributesOnElements('alert-info', { message: 'please fill your review' });
});

Scenario('sending review, success scenario', async ({ I }) => {
  I.startMocking();
  I.mockRequest('GET', GET_DETAIL.URL, GET_DETAIL.SUCCESS);
  I.mockRequest('POST', POST_REVIEW.URL, POST_REVIEW.SUCCESS);

  I.amOnPage('#/detail/mock-id');

  // fill and send form
  I.fillField('Name', reviewName);
  I.fillField('Your Review', reviewMessage);
  I.click('SEND');

  // show alert
  I.seeAttributesOnElements('alert-info', { type: 'success' });
  I.seeAttributesOnElements('alert-info', { message: 'Thank you for Review' });

  // reset form
  I.dontSeeInField('Name', reviewName);
  I.seeInField('Name', '');

  I.dontSeeInField('Your Review', reviewMessage);
  I.seeInField('Your Review', '');

  const totalReview = POST_REVIEW.SUCCESS.customerReviews.length;
  I.see(totalReview, '#total-header-review');
  I.see(totalReview, '#total-customer-review');

  I.stopMocking();
});

Scenario('sending review, failed scenario', async ({ I }) => {
  I.startMocking();
  I.mockRequest('GET', GET_DETAIL.URL, GET_DETAIL.SUCCESS);
  I.mockRequest('POST', POST_REVIEW.URL, POST_REVIEW.ERROR);

  I.amOnPage('#/detail/mock-id');

  // fill and send form
  I.fillField('Name', reviewName);
  I.fillField('Your Review', reviewMessage);
  I.click('SEND');

  // show alert
  I.seeAttributesOnElements('alert-info', { type: 'error' });
  I.seeAttributesOnElements('alert-info', { message: POST_REVIEW.ERROR.message });

  I.stopMocking();
});
