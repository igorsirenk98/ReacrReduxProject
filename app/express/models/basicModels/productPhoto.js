const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const { DataTypes } = Sequelize;

const ProductPhoto = sequelize.define('productPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ThumbnailPhotoFileName: {
        field: 'ThumbnailPhotoFileName',
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductPhoto',
    schema: 'Production'
});

ProductPhoto.associate = models => {
    ProductPhoto.belongsTo(models.productProductPhoto, {
        foreignKey: 'ProductPhotoID'
    });
}

module.exports = ProductPhoto;