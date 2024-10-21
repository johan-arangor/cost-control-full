'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      // Credit.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }

  Tag.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'category',
      //   key: 'id'
      // }
    },
    userId: {
      type: DataTypes.UUID,
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};