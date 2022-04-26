'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          password: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'test',
          password: 'test',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'egor',
          password: 'egor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
