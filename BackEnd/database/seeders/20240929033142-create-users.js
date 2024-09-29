'use strict';

const { v4: uuidv4 } = require('uuid');
const moment = require('moment'); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let users = [
      { id: uuidv4(), names: 'Administrator', lastNames: '', email: 'administrator@email.com', createdAt: moment().format("YYYY-MM-DD"), updatedAt: moment().format("YYYY-MM-DD")}
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
