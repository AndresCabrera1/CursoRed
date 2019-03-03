'use strict'
/**
 * Generando token con jwt-simple 
 *  - se carga la dependencia de jwt
 *  - se crea la contraseña secreta unica del token 
 *  - se carga la dependencia de momment para guardar la fecha de creacion 
 *  - se crea la fincion donde se guarda todos los datos que se nececiten
 */
var jwt = require('jwt-simple'); // se carga la dependencia jwt
var momen = require('moment'); // se carga la dependencia moment
var secret = "CONTRASEÑA_SECRETA_RED_SOCIAL"; // se genera la contrseña secreta
// exportamos la funcion donde se pasa el usuario de la bd desde el controller
exports.createToken = function (user) {
    var payload = { // se crea el json donde se guarda el usuario al token
        sub: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        role: user.role,
        iat: momen().unix(), // generamos la hora del token
        exp: momen().add(30, 'days').unix //se le agrega 30 dias a la hora 
    };
    return jwt.encode(payload, secret);
};