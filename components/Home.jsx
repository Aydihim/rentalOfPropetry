const React = require('react');
const Layout = require('./Layout');

function Home({ title, userName }) {
  console.log(userName, 'home user');
  return (
    <Layout title={title} userName={userName}>
      {/* <FormReg /> */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide ms-5 me-5 mt-5"
        data-bs-ride="carousel"
        style={{ higth: '50rem' }}
      >
        <div className="carousel-inner rounded-4">
          <div
            className="carousel-item active rounded-4 "
            data-bs-interval="2000"
          >
            <img
              src="https://architecturesstyle.com/wp-content/uploads/2021/01/suburban-house-ideas-9.jpeg"
              className="d-block w-100 rounded-4"
              alt="..."
              width="2000"
              height="800"
            />
          </div>

          <div className="carousel-item " data-bs-interval="2000">
            <img
              src="https://w0.peakpx.com/wallpaper/22/426/HD-wallpaper-beautiful-inside-house-view-room.jpg"
              className="d-block w-100 rounded-4"
              alt="..."
              width="2000"
              height="800"
            />
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://st.hzcdn.com/simgs/pictures/bedrooms/2013-luxury-home-inver-grove-heights-highmark-builders-img~c011a96f020934b9_9-0966-1-cef8369.jpg"
              className="d-block w-100 rounded-4"
              alt="..."
              width="2000"
              height="800"
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
      <div className="d-flex justify-content-center">
        <div
          className="card mt-5 ms-5 me-5 mb-5 d-flex justify-content-center"
          style={{ width: '45rem' }}
        >
          <div className="card-body">
            <h4 className="card-title">Наш адрес:</h4>
            <p className="card-text">
              г. Санкт-Петербург, ул. Кирочая, дом. 19.
            </p>
            <p className="card-text">"ELBRUS COODING BOOTCAMP"</p>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <div id="map" className="card-img-bottom" name="map"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Home;
