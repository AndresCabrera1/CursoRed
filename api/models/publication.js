'use strict'

var mongoose = require('mongoose');
var Shema = mongoose.Schema;

var shemaPublication = Shema({
    text: String,
    file: String,
    create_at:String,
    user: {type: Shema.ObjectId , ref:'User'} //  este captura el id generado por mongo y lo asocia con el usuario
});

module.exports = mongoose.model('Publication',shemaPublication);