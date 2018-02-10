const express = require("express");
const Sequelize = require('sequelize');

const router = express.Router();

const routesFunction = (sequelize) => {
  const Quiz = require('../models/quiz')(sequelize, Sequelize.DataTypes);
  const Question = require('../models/question')(sequelize, Sequelize.DataTypes);
  const Choice = require('../models/choice')(sequelize, Sequelize.DataTypes);

// quiz retrieval route
  router.get('/', (req, res) => {
    Quiz.findAll().then(quizzes => {
      res.send(quizzes);
    });
  });

  router.post('/', (req, res) => {
    Quiz
      .create({ title: req.body.title })
      .then(createdQuiz => {
        let promises = req.body.questions.map(question => {
          return Question.create({ quiz_id: createdQuiz.id, text: question.text })
            .then(createdQuestion => {
              let choicePromises = question.choices.map(choice => {
                return Choice.create({
                  question_id: createdQuestion.id,
                  text: choice.text,
                  correct: choice.correct
                });
              });

              return Promise.all(choicePromises);
            })
        });

        Promise.all(promises).then(createdChoices => {
          res.send(createdQuiz);
        });
      });
  });
};

module.exports = routesFunction;
