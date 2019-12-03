const sequelize = require('../sequelize');
const DataTypes = require('../types/DataTypes');

const ProductDescriptionCulture = sequelize.define('ProductDescriptionCulture', {
    productDescriptionCultureID: {
        field: 'ProductDescriptionID',
        type: DataTypes.STRING
    },
    productModelID: {
        field: 'ProductModelID',
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
    {
        timestamps: false,
        tableName: 'ProductModelProductDescriptionCulture',
        schema: 'Production'
    }
);

module.exports = ProductDescriptionCulture;