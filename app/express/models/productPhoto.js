const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const ProductPhoto = sequelize.define('ProductPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    ThumbnailPhotoFileName: {
        field: 'ThumbnailPhotoFileName',
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
        tableName: 'ProductPhoto',
        schema: 'Production'
    }
);

module.exports = ProductPhoto;