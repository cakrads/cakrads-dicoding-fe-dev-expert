const assert = require('assert');

Feature('General');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('check Navbar', async ({ I }) => {
  I.see('Favorite', 'a');

  I.seeElement('#drawer-menu li a');
  const firstLink = locate('#drawer-menu li a').first();
  const firstNavText = await I.grabTextFrom(firstLink);

  const secondLink = locate('#drawer-menu li a').at(2);
  const secondNavText = await I.grabTextFrom(secondLink);

  const thirdLink = locate('#drawer-menu li a').at(3);
  const thirdNavText = await I.grabTextFrom(thirdLink);

  assert.strictEqual(firstNavText, 'HOME');
  assert.strictEqual(secondNavText, 'FAVORITE');
  assert.strictEqual(thirdNavText, 'ABOUT US');
});

Scenario('should go to Home page when click Nav Link', ({ I }) => {
  I.amOnPage('/#/favorite');

  const linkHome = locate('#drawer-menu li a').at(1);
  I.click(linkHome);

  I.seeInCurrentUrl('/');
});

Scenario('should go to page Favorite when click Nav Link', ({ I }) => {
  const linkFavorite = locate('#drawer-menu li a').at(2);
  I.click(linkFavorite);

  I.seeInCurrentUrl('favorite');
});

Scenario('should not throw error if in detail page if id not found', async ({ I }) => {
  I.amOnPage('/#/detail/123xyz');

  I.seeAttributesOnElements('#detail-restaurant > alert-info', { type: 'error' });
});

Scenario('should show content if offline', async ({ I }) => {
  I.see('Restaurant Apps Starter Project', 'h1');

  I.usePuppeteerTo('emulate offline mode', async ({ page }) => {
    await page.setOfflineMode(true);

    I.refreshPage();

    I.see('Restaurant Apps Starter Project', 'h1');
  });
});
