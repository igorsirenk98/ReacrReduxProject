const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const transactionHistory = sequelize.define('TransactionHistory', {
    transactionID: {
        field: 'TransactionID',
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    productID: {
        field: 'ProductID',
        type: dataTypes.INTEGER
    },
    quantity: {
        field: 'Quantity',
        type: dataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'TransactionHistory',
    schema: 'Production'
});

module.exports = transactionHistory;