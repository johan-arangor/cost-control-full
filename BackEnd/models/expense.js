'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      Credit.belongsTo(models.User, { foreignKey: 'userId' });
      Credit.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
      Credit.belongsTo(models.Vehicule, { foreignKey: 'vehiculeId' });
      Credit.belongsTo(models.Credit, { foreignKey: 'creditId' });
    }
  }

  Expense.init({
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
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
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
    vehiculeId: {
      type: DataTypes.UUID,
      references: {
        model: 'Vehicule',
        key: 'id'
      }
    },
    creditId: {
      type: DataTypes.UUID,
      references: {
        model: 'Credit',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Expense',
  });

  return Expense;
};