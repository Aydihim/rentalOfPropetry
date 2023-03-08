'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Сategories', [
      {
        title: 'Снять дом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Снять квартиру',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Снять комнату',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Сategories');
  },
};
