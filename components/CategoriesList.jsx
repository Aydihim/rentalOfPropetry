const React = require('react');
const Layout = require('./Layout');
const PropertyCard = require('../components/PropertyCard');

const CategoriesList = ({ title, properties, userName }) => {
  console.log(userName);
  return (
    <Layout title={title} userName={userName}>
      <div
        className="d-flex flex-wrap justify-content-between"
        id="divProperties"
        style={{ marginTop: '100px' }}>
        {properties.length > 0 ? (
          properties.map((property) => <PropertyCard key={property.id} property={property} />)
        ) : (
          <p>идет загрузка</p>
        )}
      </div>
    </Layout>
  );
};

module.exports = CategoriesList;
