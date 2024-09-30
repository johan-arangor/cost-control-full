'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Credits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Credits');
  }
};