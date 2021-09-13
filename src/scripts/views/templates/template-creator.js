import CONFIG from '../../globals/config';

export const createCardRestaurant = (item) => `
  <article class="resto-item">
    <a href="${`#/detail/${item.id}`}" title="Restauran ${item.name}">
      <picture>
        <img
          width="450px" 
          height="290px" 
          alt="${item.name}"
          sizes="(max-width: 800px) 400px, 800px"
          data-srcset="
            ${`${CONFIG.BASE_IMAGE_URL}medium/${item.pictureId}`} 800w,
            ${`${CONFIG.BASE_IMAGE_URL}small/${item.pictureId}`} 400w"
          data-src="${`${CONFIG.BASE_IMAGE_URL}small/${item.pictureId}`}"
          class="lazyload" 
        />
      </picture>
    </a>
    <div class="item-body">
      <div class="title">
        <a href="${`#/detail/${item.id}`}" tabindex="0" title="Restauran ${item.name}">
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

export const createCardSkeleton = () => `
  <div class="skeleton-card">
    <div class="loading picture"></div>
    <div class="loading title"></div>
    <div class="loading description w-80"></div>
    <div class="loading description"></div>
    <div class="loading description w-50"></div>
  </div>
`;

export const createContainerCard = () => `
    ${createCardSkeleton()}
    ${createCardSkeleton()}
    ${createCardSkeleton()}
    ${createCardSkeleton()}
    ${createCardSkeleton()}
    ${createCardSkeleton()}
  `;

export const createAlertContainer = (message, options) => {
  const { type = 'error', close = false, autoClose = false } = options;

  return `
    <alert-info
      type=${type}
      message="${message}"
      ${close ? 'close' : ''}
      ${autoClose ? 'autoClose' : ''}
    ></alert-info>
  `;
};
