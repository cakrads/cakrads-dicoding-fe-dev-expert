const assert = require('assert');
const GET_DETAIL = require('./mock/get-detail.mock');

const BASE_IMAGE_URL = 'https://restaurant-api.dicoding.dev/images/';

// // menggunakan bahasa indonesia sebagai pendekatan submission catalog resto + PWA
Feature('Halaman Detail Restoran');

Scenario('Menampilkan detail dari restoran yang dipilih dari halaman utama(daftar restoran) atau halaman favorit restoran', async ({ I }) => {
  I.amOnPage('/');

  const firstResto = locate('.resto-item .title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click('.resto-item .title a');
  I.seeInCurrentUrl('detail');

  const detailRestoTitle = await I.grabTextFrom('h1');

  assert.strictEqual(firstRestoTitle, detailRestoTitle);
});

Scenario('Pada halaman detail restoran harus terdapat', async ({ I }) => {
  I.amOnPage('/');

  I.startMocking();
  I.mockRequest('GET', GET_DETAIL.URL, GET_DETAIL.SUCCESS);

  I.amOnPage('#/detail/mock-id');

  const resto = GET_DETAIL.SUCCESS.restaurant;
  // Nama restoran
  I.see(resto.name, 'h1');

  // Gambar
  I.seeElement('.detail-picture img');
  I.seeAttributesOnElements('.detail-picture img', { src: `${BASE_IMAGE_URL}small/${resto.pictureId}` });

  // Alamat and Kota
  I.see(resto.city);
  I.see(resto.address);

  // Deskripsi
  I.see(resto.description, '.detail-description p');

  // Menu Makanan
  I.see(resto.menus.foods[0].name);
  I.seeNumberOfElements('#food-menus li', resto.menus.foods.length);

  // Menu Minuman
  I.see(resto.menus.drinks[0].name);
  I.seeNumberOfElements('#drink-menus li', resto.menus.drinks.length);

  // Menu Restaurant
  I.see(resto.categories[0].name);
  I.seeNumberOfElements('#category-restaurant li', resto.categories.length);

  // Customer Reviews
  I.seeNumberOfElements('#review-list-container article', resto.customerReviews.length);

  // Total Customer Review
  I.see(resto.customerReviews.length, '#total-header-review');
  I.see(resto.customerReviews.length, '#total-customer-review');

  // Terdapat tombol favorite
  I.seeElement('#like-button');

  I.stopMocking();
});

Scenario('Menampilkan Alert Error jika GET Detail Error', async ({ I }) => {
  I.amOnPage('/');

  I.startMocking();
  I.mockRequest('GET', GET_DETAIL.URL, GET_DETAIL.ERROR);

  I.amOnPage('#/detail/mock-id');

  I.seeAttributesOnElements('#detail-restaurant > alert-info', { type: 'error' });
  I.seeAttributesOnElements('#detail-restaurant > alert-info', { message: GET_DETAIL.ERROR.message });

  I.stopMocking();
});
