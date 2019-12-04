const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const productProductPhoto = sequelize.define('ProductProductPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: dataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'ProductProductPhoto',
    schema: 'Production'
});

module.exports = productProductPhoto;