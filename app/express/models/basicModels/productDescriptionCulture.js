const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const productDescriptionCulture = sequelize.define('ProductDescriptionCulture', {
    productDescriptionCultureID: {
        field: 'ProductDescriptionID',
        type: dataTypes.STRING
    },
    productModelID: {
        field: 'ProductModelID',
        type: dataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false,
    tableName: 'ProductModelProductDescriptionCulture',
    schema: 'Production'
});

module.exports = productDescriptionCulture;