const React = require('react');

const PropertyCard = ({ property, category, categoryId, user }) => {
  return (
    <div className="card" style={{ width: '28rem' }}>
      <img src={property.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{property.price}</h5>
        <h5 className="card-title">{property.title}</h5>

        <a href={`/${property.categoryId}/${property.id}`} className="button" />
        <a
          href={`/categories/${categoryId}/properties/${property.id}`}
          className="button"
          style={{ marginRight: '200px' }}>
          Посмотреть
        </a>
        <button className="delete" data-id={property.id}>
          Удалить
        </button>
      </div>
    </div>
  );
};

module.exports = PropertyCard;
