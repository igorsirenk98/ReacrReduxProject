const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const ProductDescription = sequelize.define('ProductDescription', {
    id: {
        field: 'ProductDescriptionID',
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productDescription: {
        field: 'Description',
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
        tableName: 'ProductDescription',
        schema: 'Production'
    }
);

module.exports = ProductDescription;