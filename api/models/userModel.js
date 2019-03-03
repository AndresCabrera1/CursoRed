'use strict'
/*
  Creando modelos con mongoose para la Bd
 */
var mongoose = require('mongoose'); // se llama la dependencia de mongoose

var shema = mongoose.Schema;// se llama el metodo Schema de mongoose para pasarle los atributos a la tabla
// se crea el esquema para mongoose
var UserChema = shema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String,
    image:String
});

module.exports = mongoose.model('User', UserChema); //se importa el esquema para utilizrlo. en el parametro 'User' mongoose se encarga de covertirlo y llamarlo "users" --> tener precaucion.