'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {}
  }
  Article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      photo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Article',
    },
  );

  return Article;
};
