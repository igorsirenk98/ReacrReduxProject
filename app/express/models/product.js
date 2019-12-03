const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const Product = sequelize.define('Product', {
    id: {
        field: 'ProductID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productName: {
        field: 'Name',
        type: DataTypes.STRING
    },
    productNumber: {
        field: 'ProductNumber',
        type: DataTypes.STRING
    },
    price: {
        field: 'ListPrice',
        type: DataTypes.FLOAT
    }
},
    {
        timestamps: false,
        tableName: 'Product',
        schema: 'Production'
    }
);

module.exports = Product;