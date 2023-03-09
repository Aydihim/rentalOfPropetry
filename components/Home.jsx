const React = require('react');
const Layout = require('./Layout');

function Home({ title }) {
  return (
    <Layout title={title}>
      {/* <FormReg /> */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://e1.pxfuel.com/desktop-wallpaper/498/602/desktop-wallpaper-most-beautiful-home-designs-house-plans-in-the-small-homes-small-house.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://w0.peakpx.com/wallpaper/370/732/HD-wallpaper-spectacular-seaside-home-modern-house-view-pool-terrace-sea.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/864/0/42/balcony-sofas-interior-design-apartment-wallpaper-preview.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Layout>
  );
}

module.exports = Home;
