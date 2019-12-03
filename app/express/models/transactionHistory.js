const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const TransactionHistory = sequelize.define('TransactionHistory', {
    transactionID: {
        field: 'TransactionID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productID: {
        field: 'ProductID',
        type: DataTypes.INTEGER
    }
},
    {
        timestamps: false,
        tableName: 'TransactionHistory',
        schema: 'Production'
    }
);

module.exports = TransactionHistory;