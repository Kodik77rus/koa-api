const { Sequelize } = require('sequelize');
const { SEQUELIZE } = require('./config');

module.exports = new Sequelize(SEQUELIZE);
