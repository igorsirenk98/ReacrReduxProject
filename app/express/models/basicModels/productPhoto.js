const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const productPhoto = sequelize.define('ProductPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    ThumbnailPhotoFileName: {
        field: 'ThumbnailPhotoFileName',
        type: dataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductPhoto',
    schema: 'Production'
});

module.exports = productPhoto;