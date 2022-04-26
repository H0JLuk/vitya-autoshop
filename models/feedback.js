'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Feedback.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      website: DataTypes.STRING,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Feedback',
    },
  );

  return Feedback;
};
