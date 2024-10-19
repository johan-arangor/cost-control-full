'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    static associate(models) {
      // Credit.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  SubCategory.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'Category',
      //   key: 'id'
      // }
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  
  return SubCategory;
};