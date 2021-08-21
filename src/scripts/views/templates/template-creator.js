const createCard = (item) => `
  <article class="resto-item">
    <figure>
      <img src="${item.pictureId}" alt="${item.name}">
    </figure>
    <div class="item-body">
      <div class="title">
        <a href="#" tabindex="0" title="Restauran ${item.name}">
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

export default createCard;
