const Sequelize = require('sequelize');
const sequelize = require('./../db/sequelize');

module.exports = sequelize.define('Product', {
    id: {
        field: 'ProductID',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    productName: {
        field: 'Name',
        type: Sequelize.STRING
    },
    productNumber: {
        field: 'ProductNumber',
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
    tableName: 'Production.Product'
});