const React = require('react');
const Layout = require('./Layout');
const PropertyCard = require('../components/PropertyCard');

const CategoriesList = ({ title, properties, user }) => {
  return (
    <Layout title={title} user={user}>
      <div
        className="d-flex flex-wrap justify-content-around"
        id="divProperties"
        style={{ marginTop: '100px' }}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} user={user} />
          ))
        ) : (
          <p>идет загрузка</p>
        )}
      </div>
    </Layout>
  );
};

module.exports = CategoriesList;
