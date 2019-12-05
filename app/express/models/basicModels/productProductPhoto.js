const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const ProductProductPhoto = sequelize.define('productProductPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'ProductProductPhoto',
    schema: 'Production'
});

ProductProductPhoto.associate = models => {
    ProductProductPhoto.belongsTo(models.product, {
        foreignKey: 'ProductID'
    });

    ProductProductPhoto.hasOne(models.productPhoto, {
        foreignKey: 'ProductPhotoID'
    });
}

module.exports = ProductProductPhoto;