import CONFIG from '../../globals/config';

const CardRestaurant = (item) => `
  <article class="resto-item">
    <picture>
      <source media="(min-width:600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}medium/${item.pictureId}`}">
      <img src="${`${CONFIG.BASE_IMAGE_URL}small/${item.pictureId}`}" alt="${item.name}">
    </picture>
    <div class="item-body">
      <div class="title">
        <a href="${`/#/detail/${item.id}`}" tabindex="0" title="Restauran ${item.name}">
          <h3>
            ${item.name}
          </h3>
          </a>
        <div class="rating">★ ${item.rating}</div>
      </div>
      <p tabindex="0">${item.description}</p>
    </div>
    <div class="badge bg-purple">${item.city}</div>
  </article>
`;

export default CardRestaurant;
