const sequelize = require('../../sequelize');
const dataTypes = require('../../types/dataTypes');

const productDescription = sequelize.define('ProductDescription', {
    id: {
        field: 'ProductDescriptionID',
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    productDescription: {
        field: 'Description',
        type: dataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'ProductDescription',
    schema: 'Production'
});

module.exports = productDescription;