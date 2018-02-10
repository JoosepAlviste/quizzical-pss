'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('choices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      correct: {
        type: Sequelize.BOOLEAN,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('choices');
  }
};