'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Credit extends Model {
    static associate(models) {
      Credit.belongsTo(models.User, { foreignKey: 'userId' });
      Credit.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
    }
  }

  Credit.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subcategoryId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    numberPayments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paymentsMade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amountPayment: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    interest: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    additionalPayment: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    periocity: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Credit',
  });
  return Credit;
};