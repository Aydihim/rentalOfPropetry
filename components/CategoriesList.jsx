const React = require('react');
const Layout = require('./Layout');

const CategoriesList = ({ title, properties }) => {
  return (
    <Layout title={title} user={user}>
      <div className="bannerDiv">
        <img
          className="banner"
          src="https://2x2tv.ru/upload/iblock/dc0/dc0b1edfabbdef29a8ec2be12f40149a.jpg"
        />
      </div>
      <div
        className="d-flex flex-wrap justify-content-between"
        id="divProperties"
      >
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>идет загрузка</p>
        )}
      </div>
    </Layout>
  );
};

module.exports = CategoriesList;
