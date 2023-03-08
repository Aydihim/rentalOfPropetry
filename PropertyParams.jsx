const React = require('react');
const Layout = require('./Layout');

const PropertyParams = ({ property, title }) => {
  return (
    <Layout title={title}>
      <div className="card" style={{ width: '18rem' }}>
        <p>полная инфа</p>
        <img src={property.img} className="card-img-top" alt="logo" />
        <div className="card-body">
          <h5 className="card-title">{property.title}</h5>
          <p>{property.price}</p>
          <p>{property.info}</p>
          <p>{property.address}</p>
        </div>
      </div>
    </Layout>
  );
};

module.exports = PropertyParams;
