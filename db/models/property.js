const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate({ Сategory, User }) {
      Property.Сategory = Property.belongsTo(Сategory, {
        foreignKey: 'categoryId',
        as: 'category',
      });
      Property.User = Property.belongsTo(User, {
        foreignKey: 'userId',
      });
    }
  }
  Property.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      info: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Сategories',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Property',
      tableName: 'Properties',
    },
  );
  return Property;
};
