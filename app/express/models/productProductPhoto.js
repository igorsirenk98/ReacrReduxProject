const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const ProductProductPhoto = sequelize.define('ProductProductPhoto', {
    id: {
        field: 'ProductPhotoID',
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
    {
        timestamps: false,
        tableName: 'ProductProductPhoto',
        schema: 'Production'
    }
);

module.exports = ProductProductPhoto;