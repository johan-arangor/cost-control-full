'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Obligation extends Model {
    static associate(models) {
      // Credit.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
      // Credit.belongsTo(models.Vehicule, { foreignKey: 'vehiculeId' });
    }
  }

  Obligation.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    subcategoryId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'SubCategory',
      //   key: 'id'
      // }
    },
    vehiculeId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'Vehicule',
      //   key: 'id'
      // }
    },
  }, {
    sequelize,
    modelName: 'Obligation',
  });
  
  return Obligation;
};