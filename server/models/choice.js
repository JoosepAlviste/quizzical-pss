'use strict';
module.exports = (sequelize, DataTypes) => {
  var choice = sequelize.define('choice', {
    question_id: DataTypes.INTEGER,
    choice_text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return choice;
};