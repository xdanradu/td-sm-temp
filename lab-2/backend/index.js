var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
var photos = require('./photos.json');

app.get('/', function (request, response) {
    response.json({name: 'REST API v1'});
});

app.get('/photos', function (request, response) {
    response.json(photos);
});

app.delete('/photos/:index', function (request, response) {
    photos.splice(request.params.index, 1);
    response.json({status: 'DELETED'});
});

app.listen(3000, function () {
    console.log('Server running @ localhost:3000');
});
