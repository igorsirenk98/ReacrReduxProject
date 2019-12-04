const product = require('../models/basicModels/product');
const productProductPhoto = require('../models/basicModels/productProductPhoto');
const productPhoto = require('../models/basicModels/productPhoto');

product.hasOne(productProductPhoto, { foreignKey: 'ProductID' });
productProductPhoto.belongsTo(product, { foreignKey: 'ProductID' });

productProductPhoto.hasOne(productPhoto, { foreignKey: 'ProductPhotoID' });
productPhoto.belongsTo(productProductPhoto, { foreignKey: 'ProductPhotoID' });