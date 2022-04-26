'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Members',
      [
        {
          name: 'John Doe',
          photo: '/images/2page-img1.jpg',
          description:
            'Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Alex Parker',
          photo: '/images/2page-img2.jpg',
          description:
            'Раз правилами, великий вопроса рекламных дороге запятой назад несколько маленькая снова коварных',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nate Diaz',
          photo: '/images/2page-img3.jpg',
          description:
            'По всей безорфографичный, вопроса журчит реторический предупредила раз страну продолжил текстов',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Joe Rogan',
          photo: '/images/2page-img4.jpg',
          description: 'Встретил предупреждал рыбными своих родного вопрос',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members', null, {});
  },
};
