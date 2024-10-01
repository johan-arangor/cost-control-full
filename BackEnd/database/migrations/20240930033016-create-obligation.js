'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Obligations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateStart: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dateEnd: {
        type: Sequelize.DATE,
        allowNull: false
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      subcategoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'SubCategory',
          key: 'id'
        }
      },
      vehiculeId: {
        type: Sequelize.UUID,
        references: {
          model: 'Vehicule',
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
    await queryInterface.dropTable('Obligations');
  }
};