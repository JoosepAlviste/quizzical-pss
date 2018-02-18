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

    router.get('/:quizID', function (req, res) {
        var obj = new Object();

        Quiz.findById(req.params.quizID).then(quiz => {
            quiz = {
                id: quiz.id,
                title: quiz.title
            };
            //obj.quiz = quiz;
            // req.send(quiz);
            Question.findAll({
                where: {
                    quiz_id: quiz.id
                }
            }).then(questions => {
                //obj.questions = questions;
                console.log(quiz);
                //res.send(obj);

                const promises = questions.map(function (question) {
                    question = {
                        id: question.id,
                        text: question.text,
                    };
                    return Choice.findAll({
                        where: {
                            question_id: question.id
                        }
                    }).then(choices => {
                        question.choices = choices;
                        return question
                    });
                })

                Promise.all(promises).then(questions => {
                    quiz.questions = questions;

                    res.send(quiz);
                })



            })

        })


    });
    router.post('/', (req, res) => {
        Quiz
            .create({title: req.body.title})
            .then(createdQuiz => {
                let promises = req.body.questions.map(question => {
                    return Question.create({quiz_id: createdQuiz.id, text: question.text})
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

    router.get('/delete/:quizID', function (req, res) {

        Quiz.findById(req.params.quizID).then(quiz => {
            quiz = {
                id: quiz.id,
                title: quiz.title
            };
            //obj.quiz = quiz;
            // req.send(quiz);
            Question.findAll({
                where: {
                    quiz_id: quiz.id
                }
            }).then(questions => {


                //obj.questions = questions;
                console.log(quiz);
                //res.send(obj);

                const promises = questions.map(function (question) {
                    question = {
                        id: question.id,
                        text: question.text,
                    };
                     Choice.destroy({
                        where: {
                            question_id: question.id
                        }
                    })
                });

                Promise.all(promises).then(function() {
                      Question.destroy(
                          {
                              where: {
                                  quiz_id: quiz.id
                              }
                          }).then(function () {
                          Quiz.destroy(
                              {
                                  where: {
                                      id: quiz.id
                                  }
                              })

                      });

                    res.send("Quiz deleted");
                })



            })

        })


    });

    router.delete('/deleteQuestion/:questionID', function (req, res) {

        Question.destroy(
            {
                where: {
                    id: req.params.questionID
                }
                
            })
        res.send("Question Deleted ");     

    });

    router.delete('/deleteChoice/:choiceID', function (req, res) {

        Choice.destroy(
            {
                where: {
                    id: req.params.choiceID
                }

            })
        res.send("Choice deleted");

    });

    router.get('/updateQuestion/:questionID/:text', function (req, res) {

        Question.findById(req.params.questionID).then(Question => {
            console.log(req.params);
            Question.update({ text: req.params.text }, { fields: ['text'] }).then(() => {
                res.send("Updated");
            })
        })
    
    });

    router.get('/updateChoice/:choiceID/:text/:correct', function (req, res) {

        Choice.findById(req.params.choiceID).then(Choice => {
            
            Choice.update({ text: req.params.text, correct: req.params.correct }, { fields: ['text'] ['correct'] }).then(() => {
                res.send("Updated");
            })
        })

    });

    router.get('/updateQuiz/:quizID/:text', function (req, res) {

        Quiz.findById(req.params.quizID).then(Quiz => {

            Quiz.update({ title: request.params.text, update_at: Sequelize.DATE }, { title: ['text']['update_at'] }).then(() => {
                res.send("Updated");
            })
        })

    });

   
    return router;
};


module.exports = routesFunction;