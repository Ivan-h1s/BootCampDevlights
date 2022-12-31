const { DataTypes } = require('sequelize');
const db = require('./indexsql');

const tasksModel = db.define('tasks', {
    pk: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = tasksModel;