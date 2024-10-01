'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class paymentList extends Model {
    static associate(models) {
      // Credit.belongsTo(models.Credit, { foreignKey: 'credit' });
    }
  }
  
  paymentList.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    datePayment: {
      type: DataTypes.DATE,
      allowNull: false
    },
    paymentNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    amountPaid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    datePaymentMade: {
      type: DataTypes.DATE,
      allowNull: false
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
    modelName: 'paymentList',
  });

  return paymentList;
};