const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const TransactionHistory = sequelize.define('transactionHistory', {
    transactionID: {
        field: 'TransactionID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productID: {
        field: 'ProductID',
        type: DataTypes.INTEGER
    },
    quantity: {
        field: 'Quantity',
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'TransactionHistory',
    schema: 'Production'
});

TransactionHistory.associations = models => {
    TransactionHistory.belongsTo(models.product, {
        foreignKey: 'ProductID'
    });
}

module.exports = TransactionHistory;