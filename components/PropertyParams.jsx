const React = require('react');
const Layout = require('./Layout');

const PropertyParams = ({ property, title, user}) => {
  return (
    <Layout title={title} user={user}>
      <div className="d-flex justify-content-around">
        <div
          className="card ms-5"
          style={{ width: '100rem', marginTop: '50px', marginBottom: '100px' }}>
          <img src={property.img} className="card-img-top" alt="logo" />
          <div className="card-body">
            <h5 className="card-title">{property.title}</h5>
            <p>{property.price}</p>
            <p>{property.info}</p>
            <p>{property.address}</p>
          </div>
        </div>
        <div
          className="card mt-5 ms-5 me-5 d-flex justify-content-center"
          style={{ width: '45rem', marginBottom: '100px' }}>
          <div className="card-body">
            <h4 className="card-title">Адрес:</h4>
            <p className="card-text">{property.address}</p>
            <p className="card-text">{property.title}</p>
          </div>
          <div className="d-flex justify-content-center" style={{ marginBottom: '330px' }}>
            <div id="map" className="card-img-bottom" name="map"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

module.exports = PropertyParams;
