/** @type {import('sequelize-cli').Migration} */
const data = require('../testDataHouse');
module.exports = {
  async up(queryInterface) {
    const arrHouse = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Properties', arrHouse);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Properties');
  },
};
