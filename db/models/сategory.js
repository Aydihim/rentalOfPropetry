const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Сategory extends Model {
    static associate({ Property }) {
      Сategory.Property = Сategory.hasMany(Property, {
        foreignKey: 'categoryId',
        as: 'property',
      });
    }
  }
  Сategory.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Сategory',
      tableName: 'Сategories',
    }
  );
  return Сategory;
};
