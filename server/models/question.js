'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    quiz_id: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    underscored: true,
    timestamps: false,
  });
  return question;
};