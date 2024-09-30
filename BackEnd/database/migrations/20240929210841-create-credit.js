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
        type: Sequelize.DATE,
        allowNull: false
      },
      dateEnd: {
        type: Sequelize.DATE,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      subcategoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'SubCategory',
          key: 'id'
        }
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      numberPayments: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      paymentsMade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      amountPayment: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      interest: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      additionalPayment: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      periocity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      state: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
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