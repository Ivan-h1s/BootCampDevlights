const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema  = new Schema({
    //id: {type: String, required: false},
    name: String,
    lastName: String, 
    age: Number, 
    address: String
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;