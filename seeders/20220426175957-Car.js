'use strict';

const articleContent = `  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.`;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Cars',
      [
        {
          name: 'Lada Granta',
          description: 'Best russian car',
          photo: 'https://avatars.mds.yandex.net/get-autoru-vos/2160455/433c97d59d7a1278136052edeb6c93b9/1200x900',
          color: 'Белый',
          type: 'Седан',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jeep Grand Cherokee',
          description: 'American car',
          photo: 'https://avatars.mds.yandex.net/get-autoru-vos/2155199/15aeb514a2e27ea75e8c3c9485c709d3/1200x900',
          color: 'Черный',
          type: 'Внедорожник',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Toyota Alphard',
          description: 'Японский автомобиль',
          photo: 'https://avatars.mds.yandex.net/get-autoru-vos/1541975/667bf70c22fbf3145a39e2830430b86d/1200x900n',
          color: 'Белый',
          type: 'Минивэн',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Honda Accord',
          description: 'Японский автомобиль',
          photo: 'https://avatars.mds.yandex.net/get-autoru-vos/2161339/d525b93af43f5277106c523e26f7acde/1200x900',
          color: 'Красный',
          type: 'Седан',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Lexus LX',
          description: 'Японский автомобиль',
          photo: 'https://static.tildacdn.com/tild3736-3935-4362-a635-343236623630/IMG_0821-.jpg',
          color: 'Белый',
          type: 'Внедорожник',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
