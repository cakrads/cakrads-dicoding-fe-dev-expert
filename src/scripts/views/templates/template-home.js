const renderHero = () => `
  <div class="hero">
    <div class="hero__bg"></div>
    <div class="hero__inner">
      <h1 tabindex="0">Restaurant Apps Starter Project</h1>
      <p tabindex="0">Discover Restaurant & Delicious Food</p>
    </div>
  </div>
`;

const renderServices = () => `
  <div class="services">
    <div class="container">
      <article id="mainWebValue">
        <h2 tabindex="0">Our Services</h2>
        <div class="services__inner">
          <section>
            <picture>
              <source srcset="images/feature 1.webp" type="image/webp">
              <source srcset="images/feature 1.png" type="image/png">
              <img src="images/feature 1.webp" alt="Advanced Table Booking">
            </picture>
            <div>
              <h3 tabindex="0">Advanced Table Booking</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </section>
          <section>
            <picture>
              <source srcset="images/feature 2.webp" type="image/webp">
              <source srcset="images/feature 2.png" type="image/png">
              <img src="images/feature 2.webp" alt="Food For Free 24/7">
            </picture>
            <div>
              <h3 tabindex="0">Food For Free 24/7</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </section>
          <section>
            <picture>
              <source srcset="./images/feature 3.webp" type="image/webp">
              <source srcset="images/feature 3.png" type="image/png">
              <img src="images/feature 3.webp" alt="Free Home Delivery">
            </picture>
            <div>
              <h3 tabindex="0">Free Home Delivery</h3>
              <p>In mobile (&lt; 500px), I want this full width </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  </div>
`;

const renderHeadLine = () => `
  <div class="headline">
    <div class="container">
      <article>
        <figure>
          <img src="images/heros/hero-image_4.jpg" alt="Dicoding Fact Sheet">
          <figcaption>Image caption will be here</figcaption>
        </figure>
        <div class="headline__content">
          <h2 tabindex="0">some top restaurant for dining in or Take away!</h2>
          <p tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget
            sed
            phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id
            amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.</p>
          <button class="btn bg-purple">Read More</button>
        </div>
      </article>
    </div>
  </div>
`;

const renderRestaurant = () => `
  <div class="restaurants">
    <div class="container">
      <h2 tabindex="0">Explore Our Restaurants</h2>
      <p class="desc" tabindex="0">Something that you never try before in this world</p>
      <div id="list-restaurant" class="resto-data"></div>
    </div>
  </div>
`;

export {
  renderHero,
  renderServices,
  renderHeadLine,
  renderRestaurant,
};
