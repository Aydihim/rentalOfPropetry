const React = require('react');
const Layout = require('./Layout');
const PropertyCard = require('../components/PropertyCard');

const CategoriesList = ({ title, category, properties, categoryId }) => {
  return (
    <Layout title={title} category={category}>
      <div
        className="d-flex flex-wrap justify-content-between"
        id="divProperties"
        style={{ marginTop: '100px' }}
      >
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard
              key={property.id}
              categoryId={categoryId}
              property={property}
            />
          ))
        ) : (
          <p>идет загрузка</p>
        )}
      </div>
    </Layout>
  );
};

module.exports = CategoriesList;
