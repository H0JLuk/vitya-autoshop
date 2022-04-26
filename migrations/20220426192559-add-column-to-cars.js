module.exports = {
  up: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.addColumn('Cars', 'color', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Cars', 'type', {
        type: Sequelize.STRING,
      }),
    ]),
  down: (queryInterface, Sequelize) =>
    Promise.all([
      queryInterface.removeColumn('Cars', 'color'),
      queryInterface.removeColumn('Cars', 'type'),
    ]),
};
