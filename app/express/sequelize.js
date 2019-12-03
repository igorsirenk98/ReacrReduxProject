const Sequelize = require('sequelize');

module.exports = new Sequelize('AdventureWorks2012', 'user', 'SyncMaster1998', {
    dialect: 'mssql',
    host: 'localhost',
    port: '1433'
});