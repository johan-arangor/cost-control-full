'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    static associate(models) {
      // Credit.belongsTo(models.User, { foreignKey: 'userId' });
      // Credit.belongsTo(models.Vehicule, { foreignKey: 'vehiculeId' });
      // Credit.belongsTo(models.Credit, { foreignKey: 'creditId' });
    }
  }

  Income.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    dateEntry: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'User',
      //   key: 'id'
      // }
    },
    tags: {
      type: DataTypes.STRING
    },
    vehicule: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'Vehicule',
      //   key: 'id'
      // }
    },
    creditId: {
      type: DataTypes.UUID,
      // references: {
      //   model: 'Credit',
      //   key: 'id'
      // }
    },
  }, {
    sequelize,
    modelName: 'Income',
  });
  
  return Income;
};