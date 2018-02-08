'use strict';
module.exports = (sequelize, DataTypes) => {
  var correctanswer = sequelize.define('correctanswer', {
    question_id: DataTypes.INTEGER,
    choice_id: DataTypes.INTEGER,
    answer_comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return correctanswer;
};