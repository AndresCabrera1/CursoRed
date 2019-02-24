 'use strict'

 // Escript para la conecion a la Bd de Mongo
 var mongoose = require('mongoose'); // importamos la dependencia 
 var app = require('./app');
 var port = 3800;

 mongoose.Promise = global.Promise; // Creamos una promesa.

 mongoose.connect('mongodb://localhost:27017/red_social',{useMongoClient:true}) // pasamos url de mongo 
    .then(()=>{
        console.log("Conexion Exitosa");
        // Crear el servidor
        app.listen(port,()=>{
            console.log("Servidor corriendo en http://localhost:3800");
        });
    }).catch(err => console.log(err));