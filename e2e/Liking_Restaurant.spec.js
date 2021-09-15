const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', async ({ I }) => {
  I.see('Your Favorite Restaurants', 'h2');
  I.seeAttributesOnElements('#restaurant-alert-info > alert-info',
    { message: 'You didn\'t choose any Favorite Restaurant' });
});

Scenario('liking one resto', async ({ I }) => {
  I.seeAttributesOnElements('#restaurant-alert-info > alert-info',
    { message: 'You didn\'t choose any Favorite Restaurant' });

  I.amOnPage('/');

  I.seeElement('.resto-item .title a');
  const firstResto = locate('.resto-item .title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeInCurrentUrl('detail');
  I.seeElement('#like-button');
  I.click('#like-button');
  I.seeElement('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item .title a');
  const likedRestoTitle = await I.grabTextFrom('.resto-item .title a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('disliking resto', async ({ I }) => {
  I.seeAttributesOnElements('#restaurant-alert-info > alert-info',
    { message: 'You didn\'t choose any Favorite Restaurant' });

  I.amOnPage('/');

  I.click('.resto-item .title a');

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeNumberOfElements('.resto-item', 1);

  I.click('.resto-item .title a');

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');
  I.seeElement('[aria-label="like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeNumberOfElements('.resto-item', 0);
});

Scenario('liking one resto in Mobile', async ({ I }) => {
  I.resizeWindow(360, 640);

  I.seeAttributesOnElements('#restaurant-alert-info > alert-info',
    { message: 'You didn\'t choose any Favorite Restaurant' });

  I.amOnPage('/');

  I.seeElement('.resto-item .title a');
  const firstResto = locate('.resto-item .title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeInCurrentUrl('detail');
  I.seeElement('#like-fab');
  I.click('#like-fab');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item .title a');
  const likedRestoTitle = await I.grabTextFrom('.resto-item .title a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('disliking one resto in Mobile', async ({ I }) => {
  I.resizeWindow(360, 640);

  I.seeAttributesOnElements('#restaurant-alert-info > alert-info',
    { message: 'You didn\'t choose any Favorite Restaurant' });

  I.amOnPage('/');

  I.click('.resto-item .title a');

  I.seeElement('#like-fab');
  I.click('#like-fab');

  I.amOnPage('/#/favorite');
  I.seeNumberOfElements('.resto-item', 1);

  I.click('.resto-item .title a');

  I.seeElement('[aria-label="tap to unlike this restaurant"]');
  I.click('[aria-label="tap to unlike this restaurant"]');
  I.seeElement('[aria-label="tap to like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeNumberOfElements('.resto-item', 0);
});
