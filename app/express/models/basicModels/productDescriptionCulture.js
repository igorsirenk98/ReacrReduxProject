const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const ProductDescriptionCulture = sequelize.define('productDescriptionCulture', {
    productDescriptionCultureID: {
        field: 'ProductDescriptionID',
        type: DataTypes.STRING
    },
    productModelID: {
        field: 'ProductModelID',
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'ProductModelProductDescriptionCulture',
    schema: 'Production'
});

ProductDescriptionCulture.associate = models => {
    ProductDescriptionCulture.hasMany(models.product, {
        foreignKey: 'ProductModelID'
    });

    ProductDescriptionCulture.belongsTo(models.productDescription, {
        foreignKey: 'ProductDescriptionID'
    });
}

module.exports = ProductDescriptionCulture;