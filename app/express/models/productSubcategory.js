const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const ProductSubcategory = sequelize.define('ProductSubcategory', {
    productCategoryID: {
        field: 'ProductCategoryID',
        type: DataTypes.INTEGER
    },
    productSubcategoryID: {
        field: 'ProductSubcategoryID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productName: {
        field: 'Name',
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
        tableName: 'ProductSubcategory',
        schema: 'Production'
    }
);

module.exports = ProductSubcategory;