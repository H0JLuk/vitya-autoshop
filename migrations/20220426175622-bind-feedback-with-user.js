module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Feedbacks', 'UserId', {
      type: Sequelize.INTEGER,
      // references: {
      //   model: 'Users',
      //   key: 'id',
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'CASCADE',
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Feedbacks', 'UserId');
  },
};
