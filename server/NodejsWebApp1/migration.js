// migration.js
var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'dyzz462xx',
    database: 'my_db'
});

migration.init(connection, __dirname + '/migrations');