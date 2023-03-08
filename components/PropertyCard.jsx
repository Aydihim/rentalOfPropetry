const React = require('react');

const PropertyCard = ({ category, property }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={property.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{property.price}</h5>
        <h5 className="card-title">{property.title}</h5>
        <a href={`/${category.id}/${property.id}`} className="button">
          Посмотреть
        </a>
      </div>
    </div>
  );
};

module.exports = PropertyCard;
