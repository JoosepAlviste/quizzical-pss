'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    quiz_id: DataTypes.INTEGER,
    question_text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return question;
};