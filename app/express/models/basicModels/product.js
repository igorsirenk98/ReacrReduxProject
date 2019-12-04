const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const product = sequelize.define('Product', {
    id: {
        field: 'ProductID',
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    productName: {
        field: 'Name',
        type: dataTypes.STRING
    },
    productNumber: {
        field: 'ProductNumber',
        type: dataTypes.STRING
    },
    price: {
        field: 'ListPrice',
        type: dataTypes.FLOAT
    }
}, {
    timestamps: false,
    tableName: 'Product',
    schema: 'Production'
});

module.exports = product;