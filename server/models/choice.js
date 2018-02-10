'use strict';
module.exports = (sequelize, DataTypes) => {
  var choice = sequelize.define('choice', {
    question_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    correct: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
    },
    timestamps: false,
    underscored: true,
  });
  return choice;
};