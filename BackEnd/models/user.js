'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Credit, { foreignKey: 'userId' });
      User.hasMany(models.Income, { foreignKey: 'userId' });
      User.hasMany(models.Expense, { foreignKey: 'userId' });
      User.hasMany(models.Vehicule, { foreignKey: 'userId' });
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastNames: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true
  });

  return User;
};