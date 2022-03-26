var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

let cars = [
    {
        "id": 178,
        "name": "Dacia 1310",
        "power": "70",
        "color": "red",
        "motorizare": "benzina",
        "capacitateCilindrica": "1200",
        "descriere": "test",
        "year": 2020,
        "price": "5000 EUR"
    },
    {
        "id": 32324,
        "name": "bmw",
        "power": "70",
        "color": "red",
        "motorizare": "benzina",
        "capacitateCilindrica": "1200",
        "descriere": "test",
        "year": 2020,
        "price": "5000 EUR"
    },
    {
        "id": 3234324,
        "name": "audi",
        "power": "70",
        "color": "red",
        "motorizare": "benzina",
        "capacitateCilindrica": "1200",
        "descriere": "test",
        "year": 2020,
        "price": "5000 EUR"
    }
];

var bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

app.get('/', function (request, response) {
    response.json('NodeJS REST API');
});

app.get('/cars', function (request, response) {
    response.json(cars);
});

app.delete('/cars/:id', function (request, response) {
    deleteCarById(request.params.id);
    response.json('Car with id ' + request.params.id + ' was deleted');
});

app.listen(3000, function () {
    console.log('Server running @ localhost:3000');
});

function deleteCarById(id) {
    let index = getIndexById(id);
    cars.splice(index, 1);
}

function getIndexById(id) {
    let index = -1;
    for(let i=0;i<cars.length;i++) {
        if(id == cars[i].id) {
            index = i;
        }
    }
    return index;
}

