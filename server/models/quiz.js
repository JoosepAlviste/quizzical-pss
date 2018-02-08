'use strict';
module.exports = (sequelize, DataTypes) => {
  var quiz = sequelize.define('quiz', {
    tittle: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
    creator_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quiz;
};