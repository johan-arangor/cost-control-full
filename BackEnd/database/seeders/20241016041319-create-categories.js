'use strict';

const { v4: uuidv4 } = require('uuid');
const moment = require('moment'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let newDate = moment().format("YYYY-MM-DD");

    let categories = [
      {
        id: uuidv4(),
        name: 'INGRESO',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate,
        userId: uuidv4()
      },
      {
        id: uuidv4(),
        name: 'GASTO',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate,
        userId: uuidv4()
      },
      {
        id: uuidv4(),
        name: 'INVERSION',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate,
        userId: uuidv4()
      },
      {
        id: uuidv4(),
        name: 'VEHICULO',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate,
        userId: uuidv4()
      }
    ];

    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};