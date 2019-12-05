const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const ProductDescription = sequelize.define('productDescription', {
    id: {
        field: 'ProductDescriptionID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productDescription: {
        field: 'Description',
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductDescription',
    schema: 'Production'
});

ProductDescription.associate = models => {
    ProductDescription.hasMany(models.productDescriptionCulture, {
        foreignKey: 'ProductDescriptionID'
    });
}

module.exports = ProductDescription;