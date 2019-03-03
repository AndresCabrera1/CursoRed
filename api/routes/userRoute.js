/** 
 * Creando rutas para los controladores 
 * se carga la instancia de express 
 * se carga el controlador que apunta a la base de datos
 * se crea el nombre de las ruta
*/

var express = require('express');// se carga la dependencia express
var UserController = require('../controlloers/userController'); // se carga el controlador que ejecuta las funciones necesarias
var api = express.Router();//se guarda en una variable la dependencia express.router para utilizar POST y GUET
// se cra la ruta y el combre pasandole el nombre del controlador y la funcion a utilizar
api.get('/home', UserController.home);
api.get('/pruebas', UserController.pruebas);
api.post('/registrar',UserController.saveUserController);
api.post('/login',UserController.loginUserController);

module.exports = api;