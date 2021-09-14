const reviewName = 'codecept';
const reviewMessage = 'My Review From Codecept. Should used mock letter';

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
  I.click('.resto-item a');
});

Scenario('should show form revision exist and can filled', async ({ I }) => {
  I.seeInCurrentUrl('detail');

  I.fillField('Name', reviewName);
  I.seeInField('Name', reviewName);

  I.fillField('Your Review', reviewMessage);
  I.seeInField('Your Review', reviewMessage);
});

Scenario('should prevent submit if data form empty', ({ I }) => {
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

Scenario('sending review', async ({ I }) => {
  I.seeInCurrentUrl('detail');

  // get total review
  const totalReviewText = await I.grabTextFrom('#total-header-review');

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

  I.see(+totalReviewText + 1, '#total-header-review');
  I.see(+totalReviewText + 1, '#total-customer-review');
});
