const express = require("express");
const Sequelize = require('sequelize');

const routesFunction = (sequelize) => {
  const router = express.Router();

  const Quiz = require('../models/quiz')(sequelize, Sequelize.DataTypes);
  const Question = require('../models/question')(sequelize, Sequelize.DataTypes);
  const Choice = require('../models/choice')(sequelize, Sequelize.DataTypes);

  // quiz retrieval route
  router.get('/', (req, res) => {
    Quiz.findAll().then(quizzes => {
      res.send(quizzes);
    });
  });

  router.get('/:quizID', function (req, res){
      var obj = new Object();

      Quiz.findById(req.params.quizID).then(quiz => {
            obj.quiz = quiz;
          Question.findAll({where:{
              quiz_id: quiz.id
          }}).then(questions => {
              quiz.questions = questions;
              obj.quiz.questions = questions;
              console.log(questions);
              res.send(questions);
              questions.forEach(function (question) {
                  Choice.findAll({where:{
                          question_id:question.id
                      }}).then(choices =>{
                          console.log(choices);

                  })

              })







          })

      })


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

  return router;
};

module.exports = routesFunction;
