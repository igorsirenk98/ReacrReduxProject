const Product = require('../models/product');
const ProductDescription = require('../models/productDescription');
const ProductDescriptionCulture = require('../models/productDescriptionCulture');

ProductDescriptionCulture.hasMany(Product, { foreignKey: 'ProductModelID' });
Product.belongsTo(ProductDescriptionCulture, { foreignKey: 'ProductModelID' });

ProductDescription.hasMany(ProductDescriptionCulture, { foreignKey: 'ProductDescriptionID' });
ProductDescriptionCulture.belongsTo(ProductDescription, { foreignKey: 'ProductDescriptionID' });