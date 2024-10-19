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
        name: 'INCOME',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate
      },
      {
        id: uuidv4(),
        name: 'EXPENSE',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate
      },
      {
        id: uuidv4(),
        name: 'INVESTMENT',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate
      },
      {
        id: uuidv4(),
        name: 'VEHICLE',
        state: 1,
        createdAt: newDate,
        updatedAt: newDate
      }
    ];

    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};