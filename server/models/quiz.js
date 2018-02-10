'use strict';
module.exports = (sequelize, DataTypes) => {
  var quiz = sequelize.define('quiz', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true,
  });
  return quiz;
};