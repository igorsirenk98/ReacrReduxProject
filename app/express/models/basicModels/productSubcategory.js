const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const ProductSubcategory = sequelize.define('productSubcategory', {
    productCategoryID: {
        field: 'ProductCategoryID',
        type: DataTypes.INTEGER
    },
    productSubcategoryID: {
        field: 'ProductSubcategoryID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productSubcategoryName: {
        field: 'Name',
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductSubcategory',
    schema: 'Production'
});

ProductSubcategory.associations = models => {
    ProductSubcategory.hasMany(models.product, {
        foreignKey: 'ProductSubcategoryID'
    });
}

module.exports = ProductSubcategory;