const Product = require('../models/product');
const ProductProductPhoto = require('../models/productProductPhoto');
const ProductPhoto = require('../models/productPhoto');

Product.hasMany(ProductProductPhoto, { foreignKey: 'ProductID' });
ProductProductPhoto.belongsTo(Product, { foreignKey: 'ProductID' });

ProductProductPhoto.hasMany(ProductPhoto, { foreignKey: 'ProductPhotoID' });
ProductPhoto.belongsTo(ProductProductPhoto, { foreignKey: 'ProductPhotoID' });