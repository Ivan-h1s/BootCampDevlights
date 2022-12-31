const sequalize = require('sequelize');

const db = new sequalize.Sequelize('sqlite::memory:');

module.exports = db;