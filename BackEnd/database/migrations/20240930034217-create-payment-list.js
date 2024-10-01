'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('paymentLists', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      datePayment: {
        type: Sequelize.DATE,
        allowNull: false
      },
      paymentNumber: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      amountPaid: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      datePaymentMade: {
        type: Sequelize.DATE,
        allowNull: false
      },
      creditId: {
        type: Sequelize.UUID,
        references: {
          model: 'Credit',
          key: 'id'
        }
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
    await queryInterface.dropTable('paymentLists');
  }
};