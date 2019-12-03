const ProductSubcategory = require('../models/productSubcategory');
const TransactionHistory = require('../models/transactionHistory');
const ProductPhotoPhoto = require('../models/productProductPhoto');
const ProductPhoto = require('../models/productPhoto');
const ProductDescriptionCulture = require('../models/productDescriptionCulture');
const ProductDescription = require('../models/productDescription');
const ProductRelations = require('../relations/ProductRelations');
const PhotoRelations = require('../relations/PhotoRelations');
const DescriptionRelations = require('../relations/DescriptionRelations');

const ProductActions = {
    getTopProducts(model) {
        return model.findAll({
            attributes: ['Name', 'ProductNumber', 'Color', 'ListPrice'],
            include: [{
                model: ProductSubcategory,
                where: {
                    ProductCategoryID: 1
                }
            },
            {
                model: TransactionHistory
            },
            {
                attributes: ['ProductPhotoID'],
                model: ProductPhotoPhoto,
                include: [{
                    attributes: ['ThumbnailPhotoFileName'],
                    model: ProductPhoto
                }]
            },
            {
                attributes: ['ProductDescriptionID'],
                model: ProductDescriptionCulture,
                where: {
                    CultureID: 'en'
                },
                include: [{
                    attributes: ['Description'],
                    model: ProductDescription
                }]
            }]
        });
    }
}

module.exports = ProductActions;