const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const Product = sequelize.define('product', {
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
}, {
    timestamps: false,
    tableName: 'Product',
    schema: 'Production'
});

Product.associate = models => {
    Product.hasMany(models.transactionHistory, {
        foreignKey: 'ProductID'
    });

    Product.belongsTo(models.productSubcategory, {
        foreignKey: 'ProductSubcategoryID'
    });

    Product.belongsTo(models.productDescriptionCulture, {
        foreignKey: 'ProductModelID'
    });

    Product.hasOne(models.productProductPhoto, {
        foreignKey: 'ProductID'
    });
}

module.exports = Product;