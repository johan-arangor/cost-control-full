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
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    subcategoryId: {
      type: DataTypes.UUID,
      references: {
        model: 'SubCategory',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
    },
  }, {
    sequelize,
    modelName: 'Credit',
  });
  
  return Credit;
};