export default () => `
<div class="detail-page container">
  <article>
    <header class="detail-title">
      <div class="detail-title-main">
        <div>
          <h1>Melting Pot</h1>
        </div>
        <div>
          <button class="btn bg-plain">
            <i class="fa fa-heart-o" aria-hidden="true"></i> Save
          </button>
        </div>
      </div>
      <div class="detail-title-info">
        <span>
          <i class="fa fa-star" aria-hidden="true"></i> 4.86 (141 reviews)
        </span>
        <span class="sparate"> · </span>
        <span>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <address>Medan, Jln. Pandeglang no 19</address>
        </span>
      </div>
    </header>
    <div class="detail-content">
      <div class="detail-picture">
        <picture>
          <source media="(min-width:900px)" srcset="https://restaurant-api.dicoding.dev/images/large/14">
          <source media="(min-width:600px)" srcset="https://restaurant-api.dicoding.dev/images/medium/14">
          <img src="https://restaurant-api.dicoding.dev/images/small/14" alt="Melting Pot">
        </picture>
      </div>
      <div class="detail-description card">
        <section>
          <h2 class="title">Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies
            nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
            dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean
            vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam
            lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
          </p>
        </section>
      </div>
      <div class="detail-menus card">
        <section>
          <h2 class="title">Menus</h2>
          <article>
            <h3>Foods</h3>
            <ul>
              <li>Paket rosemary</li>
              <li>Toastie salmon</li>
              <li>Bebek crepes</li>
              <li>Salad lengkeng</li>
            </ul>
          </article>
          <br />
          <article>
            <h3>Drink</h3>
            <ul>
              <li>Es krim</li>
              <li>Sirup</li>
              <li>Jus apel</li>
              <li>Jus jeruk</li>
              <li>Coklat panas</li>
              <li>Air</li>
              <li>Es kopi</li>
              <li>Jus alpukat</li>
              <li>Jus mangga</li>
              <li>Teh manis</li>
              <li>Kopi espresso</li>
              <li>Minuman soda</li>
              <li>Jus tomat</li>
            </ul>
          </article>
        </section>
      </div>
      <div class="detail-reviews card">
        <section>
          <div class="title">
            <h2>Reviews</h2>
            <div>
              <i class="fa fa-star" aria-hidden="true"></i> 4.86 (141 reviews)
            </div>
          </div>
          <article>
            <h4>Ahmad</h4>
            <p>Tidak rekomendasi untuk pelajar!</p>
            <span>13 November 2019</span>
          </article>
          <article>
            <h4>Ahmad</h4>
            <p>Tidak rekomendasi untuk pelajar!</p>
            <span>13 November 2019</span>
          </article>
          <article>
            <h4>Ahmad</h4>
            <p>Tidak rekomendasi untuk pelajar!</p>
            <span>13 November 2019</span>
          </article>
          <article>
            <h4>Ahmad</h4>
            <p>Tidak rekomendasi untuk pelajar!</p>
            <span>13 November 2019</span>
          </article>
          <article>
            <h4>Ahmad</h4>
            <p>Tidak rekomendasi untuk pelajar!</p>
            <span>13 November 2019</span>
          </article>
        </section>
        <section class="form-review">
          <form class="form">
            <div class="field">
              <label for="review-name">Name</label>
              <input id="review-name" type="text" placeholder="your great name here" required>
            </div>
            <div class="field">
              <label for="review-message">Your Review</label>
              <textarea id="review-message" placeholder="what do you think about this restaurant" required></textarea>
            </div>
            <button class="btn bg-purple">
              <i class="fa fa-send" aria-hidden="true"></i> SEND
            </button>
          </form>
        </section>
      </div>
    </div>
  </article>
  <button aria-label="unlike this restaurant" id="likeButton" class="mobile-like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
</div>`;
