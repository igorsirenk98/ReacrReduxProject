const Product = require('../models/product');
const ProductSubcategory = require('../models/productSubcategory');
const ProductDescription = require('../models/productDescription');
const TransactionHistory = require('../models/transactionHistory');

Product.belongsTo(ProductSubcategory, { foreignKey: 'ProductSubcategoryID' });
ProductSubcategory.hasMany(Product, { foreignKey: 'ProductSubcategoryID' });

Product.hasMany(TransactionHistory, { foreignKey: 'ProductID' });
TransactionHistory.belongsTo(Product, { foreignKey: 'ProductID' });