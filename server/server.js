const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(express.static('pages'))
app.set('view engine', 'html');
var testRoutes = require('./routes/testRoutes')
app.use('/test',testRoutes)



var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}



app.use(requestTime)

var mysql = require('mysql')
var mysql2 = require('mysql2')
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'dyzz462xx',
    database: 'my_db'
});




connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

connection.query('SELECT * FROM QUIZ', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows)
})
// quiz retrieval route
app.get('/quizzes', function (req, res, next) {
    
        connection.query('SELECT * FROM QUIZ', function (err, rows, fields) {
            if (err) throw err

            res.send(rows);
        })
    
});

app.post('/addQuiz/:quizName', function (req, res, next) {
    var quizName = req.params.quizName;
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query('INSERT INTO quiz SET ?', quizName,
            function (err, result) {
                if (err) throw err;
                res.send('Quiz added to database with ID: ' + result.insertId);
            }
        );
    })
});
app.post('/createQuiz', function (req, res) {
    // this is where you handle the POST request.
    var createQuiz = {
        title: req.body.title,
        creator_id: req.body.creator_id
       
    }
    var quizID=0;

    connection.query('INSERT INTO quiz SET ?;SELECT LAST_INSERT_ID();', createQuiz, function (err, rows, fields) {
        if (err) throw err
        console.log("Quiz added");
        quizID = rows;
    });

    var questions = req.body.questions;
    for (var key in questions) {
        var questionID
        if (questions.hasOwnProperty(key)) {
            var question = questions[key];
            connection.query('INSERT INTO question SET ?;SELECT LAST_INSERT_ID();', quizID, question.text, function (err, rows, fields) {
                if (err) throw err
                console.log("Question added");
                questionID = rows;
            });
            var choices = question.choices
            var choiceID=0;
            for (var key2 in choices) {
                if (choices.hasOwnProperty(key2)) {
                    var choice = choices(key2);
                    connection.query('INSERT INTO choice  SET ?;SELECT LAST_INSERT_ID();', questionID, choice.text, function (err, rows, fields) {
                        if (err) throw err
                        console.log("Choice added");
                        choiceID = rows;
                    });
                    if (choice.correct == true) {
                        connection.query('INSERT INTO correctanswer  SET ?;', questionID,choiceID, function (err, rows, fields) {
                            if (err) throw err
                            console.log("Answer added");
                            
                        });

                    }

                }

            }
        }
    }
    res.send(quizzID);
});


/*const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_db', 'root', 'dyzz462xx', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: '3306',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

  
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

// force: true will drop the table if it already exists
User.sync({ force: true }).then(() => {
    // Table created
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});
*/
app.get('/', (req, res) => res.render('index.html'));

app.get('/time', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})



var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})