'use strict';
const { USER_TABLE, UserSchema } = require('./../models/userModel');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn(USER_TABLE, 'role');


  }
};
