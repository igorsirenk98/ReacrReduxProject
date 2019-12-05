const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');
const db = {};

db.product = require('../basicModels/product');
db.productDescription = require('../basicModels/productDescription');
db.productDescriptionCulture = require('../basicModels/productDescriptionCulture');
db.productProductPhoto = require('../basicModels/productProductPhoto');
db.productPhoto = require('../basicModels/productPhoto');
db.productSubcategory = require('../basicModels/productSubcategory');
db.transactionHistory = require('../basicModels/transactionHistory');

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;