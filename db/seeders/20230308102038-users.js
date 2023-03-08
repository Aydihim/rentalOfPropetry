'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        login: 'Admin',
        password: 'topAdmin123',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aidima',
        login: 'aidima123',
        password: '123',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Egor',
        login: 'egor123',
        password: '123',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
