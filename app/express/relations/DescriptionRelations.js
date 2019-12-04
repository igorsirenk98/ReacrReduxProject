const product = require('../models/basicModels/product');
const productDescription = require('../models/basicModels/productDescription');
const productDescriptionCulture = require('../models/basicModels/productDescriptionCulture');

productDescriptionCulture.hasMany(product, { foreignKey: 'ProductModelID' });
product.belongsTo(productDescriptionCulture, { foreignKey: 'ProductModelID' });

productDescription.hasMany(productDescriptionCulture, { foreignKey: 'ProductDescriptionID' });
productDescriptionCulture.belongsTo(productDescription, { foreignKey: 'ProductDescriptionID' });