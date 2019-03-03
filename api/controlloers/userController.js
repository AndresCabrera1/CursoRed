'use strict'

/*
  Se crea el controlador para enviarle los dotos a la 
  BDMongoose por medio del modelo ya creado y cargado en el controlador
    - para cifrar la contraseña se carga la dependencia bcrypt 
    - se crea las funciones para el controlador

*/

var bcrypt = require('bcrypt-nodejs'); //cargar la dependencia para para encriptar la contraseña
var User = require("../models/userModel"); // Cargar el  modelo
var jwt = require("../services/jws"); // se carga el token

//funcion Guardar Usuarios en mongodb
function saveUserController(req, res) {
    var params = req.body; // todos los datos enviados por POST se cargan en esta variable 
    var user = new User(); // se instancia el modelo userModel para cargar los datos

    // se verifica si los datos enviados por POST llegaron correctamente 
    if (params.name && params.surname &&
        params.nick && params.email &&
        params.password) {
        // se guardan los datos en el modelo de Mongoose
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'USER_ROLE';
        user.image = null;

        // Si el suario esta repetido se compara con la Bd
        User.find({
            $or: [{
                    email: user.email.toLowerCase()
                },
                {
                    nick: user.nick.toLowerCase()
                }
            ]
        }).exec((err, users) => {
            if (err) return res.status(500).send({
                message: 'error en la peticion de usuario'
            });
            if (user && users.length >= 1) {
                return res.status(200).send({
                    message: 'El usuario ya existe'
                });
            } else {
                // se encripta la pass por medio de bcCrypt
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    user.password = hash;
                    // se guarda el usuario con todos sus datos
                    user.save((err, userStores) => {
                        if (err) return res.status(500).send({
                            message: 'error al guardar el mensaje'
                        });

                        if (userStores) {
                            res.status(200).send({
                                user: userStores
                            });
                        } else {
                            res.status(404).sen({
                                message: 'No se a registrado el Usuario'
                            })
                        }


                    });
                });
            }
        });
    } else {
        res.status(200).send({
            message: "Llena todos los campos"
        });
    }

}
// funcion para el login de usuario
function loginUserController(req, res) {
    var params = req.body; // se recibe los parametros por post
    var email = params.email;
    var password = params.password;
    // se verifica si el usuario ya esta en la BD
    User.findOne({
        email: email
    }, (err, user) => {
        if (err) return res.status(500).send({
            message: 'error en el login'
        });
        if (user) {
            //se compara la contraseña del post con la bd 
            bcrypt.compare(password, user.password, (err, check) => {
                if (check) {
                    if (params.gettoken) {
                        //generar y devolver token 
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        })
                    } else {
                        user.password = undefined; // escondo la propiedad y la dejo solo en el backen no la muestro en la respuesta
                        return res.status(200).send({
                            user
                        }) // se envia los tados que tenga el usuario
                    }
                } else {
                    return res.status(404).send({
                        message: 'el usuario no se pudo identificar error en la contraseña o usario'
                    })
                }
            });
        } else {
            return res.status(404).send({
                message: 'el usuario no se pudo identificar registrate'
            })
        }

    });

}

function home(req, res) {
    res.status(200).send({
        message: 'hola desde node js servidor'
    });
}

function pruebas(req, res) {
    res.status(200).send({
        message: 'hola que hace'
    });
}
// se exporta la funcion para utilizarla en las rutas
module.exports = {
    home,
    pruebas,
    saveUserController,
    loginUserController
}