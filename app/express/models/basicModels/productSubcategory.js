const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const productSubcategory = sequelize.define('ProductSubcategory', {
    productCategoryID: {
        field: 'ProductCategoryID',
        type: dataTypes.INTEGER
    },
    productSubcategoryID: {
        field: 'ProductSubcategoryID',
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    productName: {
        field: 'Name',
        type: dataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductSubcategory',
    schema: 'Production'
});

module.exports = productSubcategory;