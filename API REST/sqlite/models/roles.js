const { DataTypes } = require('sequelize');
const db = require('./indexsql');

const rolesModel = db.define('roles', {
    pk: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = rolesModel;