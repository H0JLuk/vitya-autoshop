module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Feedbacks', 'UserId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Feedbacks', 'UserId');
  },
};
