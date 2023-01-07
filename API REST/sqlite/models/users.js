const { DataTypes } = require('sequelize');
const db = require('./indexsql');

const usersModel = db.define('users', {
    // pk: {
    //     primaryKey: true,
    //     autoIncrement: true,
    //     type: DataTypes.INTEGER
    // },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING
});

module.exports = usersModel;