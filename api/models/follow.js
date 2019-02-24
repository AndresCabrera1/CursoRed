'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var followShema = schema({
    user:{type: schema.ObjectId, ref: 'User'},
    followed:string
});

module.exports = mongoose.model('Follow', followShema);