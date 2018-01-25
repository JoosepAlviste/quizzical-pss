const express = require('express')
var bodyParser = require('body-parser');
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


app.get('/', (req, res) => res.render('index.html'));

app.get('/time', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})