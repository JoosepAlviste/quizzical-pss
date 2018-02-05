const express = require('express')
var bodyParser = require('body-parser');
//const models = require('./models')
const app = express()
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use(express.static('pages'))
app.set('view engine', 'html');


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

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()
const Sequelize = require('sequelize');

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