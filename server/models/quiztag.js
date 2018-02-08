'use strict';
module.exports = (sequelize, DataTypes) => {
  var quiztag = sequelize.define('quiztag', {
    quiz_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quiztag;
};