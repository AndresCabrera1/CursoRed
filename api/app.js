'use strict'

var express = require('express'); // importamos express
var bodyParser = require('body-parser'); // importamos body-parser

var app = express();

// middlewares --> se ejecuta en el medio de la peticion 
app.use(bodyParser.urlencoded({extended:false}))// configuracion para poder comvertir el json de la peticion
app.use(bodyParser.json()); // convierte la peticion en un json

//rutas 
app.get('/',(req,res)=>{ //se llama el metodo a utilizar "pos, get" desde express esta recibe dos parametro el nombre de la ruta y una funcion con una respuesta req o res si el estatus es 200 se le pasa el json
    res.status(200).send(
        {
            message: 'hola desde node js servidor'
        }
    );
});

app.get('/prueba', (req,res)=>{
    res.status(200).send({
        message:'hola que hace'
    });
});

// exportar 
module.exports= app; // se exporta todo lo que tenga app.