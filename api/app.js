'use strict'

var express = require('express'); // importamos express
var bodyParser = require('body-parser'); // importamos body-parser

var app = express();

//cargar rutas 
var User_Router = require('../api/routes/userRoute');

// middlewares --> se ejecuta en el medio de la peticion 
app.use(bodyParser.urlencoded({
    extended: false
})) // configuracion para poder comvertir el json de la peticion
app.use(bodyParser.json()); // convierte la peticion en un json

//rutas 
app.use('/api', User_Router);

// exportar 
module.exports = app; // se exporta todo lo que tenga app.