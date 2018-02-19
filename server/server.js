const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const config = require('./config/config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

const testRoutes = require('./routes/testRoutes');
app.use('/test', testRoutes);

const quizzesRoutes = require('./routes/quizzes')(sequelize);
const usersRoutes = require('./routes/users')(sequelize);
app.use('/quizzes', quizzesRoutes);
app.use('/users', usersRoutes);

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
