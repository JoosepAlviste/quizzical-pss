'use strict';
module.exports = (sequelize, DataTypes) => {
  var quenstionAnswer = sequelize.define('quenstionAnswer', {
    question_id: DataTypes.INTEGER,
    choice_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quenstionAnswer;
};