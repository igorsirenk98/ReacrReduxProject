const product = require('../models/basicModels/product');
const productSubcategory = require('../models/basicModels/productSubcategory');
const productDescription = require('../models/basicModels/productDescription');
const transactionHistory = require('../models/basicModels/transactionHistory');

product.belongsTo(productSubcategory, { foreignKey: 'ProductSubcategoryID' });
productSubcategory.hasMany(product, { foreignKey: 'ProductSubcategoryID' });

product.hasMany(transactionHistory, { foreignKey: 'ProductID' })
transactionHistory.belongsTo(product, { foreignKey: 'ProductID' });
