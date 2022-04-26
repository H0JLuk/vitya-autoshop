'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {}
  }

  Car.init(
    {
      photo: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      color: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
    },
  );

  return Car;
};
