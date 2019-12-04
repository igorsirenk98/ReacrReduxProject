const product = require('./basicModels/product');
const productSubcategory = require('./basicModels/productSubcategory');
const transactionHistory = require('./basicModels/transactionHistory');
const productProductPhoto = require('./basicModels/productProductPhoto');
const productPhoto = require('./basicModels/productPhoto');
const productDescriptionCulture = require('./basicModels/productDescriptionCulture');
const productDescription = require('./basicModels/productDescription');
const productRelations = require('../relations/productRelations');
const photoRelations = require('../relations/photoRelations');
const descriptionRelations = require('../relations/descriptionRelations');
const sequelize = require('../sequelize');

const productSearch = {
    getBikes(model) {
        return model.findAll({
            attributes: ['Name', 'ProductNumber', 'Color', 'ListPrice'],
            include: [{
                    model: productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: ['Quantity'],
                    model: transactionHistory
                },
                {
                    attributes: ['ProductPhotoID'],
                    model: productProductPhoto,
                    include: [{
                        attributes: ['ThumbnailPhotoFileName'],
                        model: productPhoto
                    }]
                },
                {
                    attributes: ['ProductDescriptionID'],
                    model: productDescriptionCulture,
                    where: {
                        CultureID: 'en'
                    },
                    include: [{
                        attributes: ['Description'],
                        model: productDescription
                    }]
                }
            ]
        });
    },
    getTopProducts(model) {
        return model.findAll({
            attributes: [
                [sequelize.fn('sum', sequelize.col('Quantity')), 'TotalAmount'],
                'ProductID', 'Name'
            ],
            include: [{
                    attributes: [],
                    model: transactionHistory
                },
                {
                    attributes: ['ProductSubcategoryID'],
                    model: productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: ['ProductPhotoID'],
                    model: productProductPhoto
                }
            ],
            group: [
                'Product.ProductID',
                'Product.Name',
                'ProductSubcategory.ProductSubcategoryID',
                'ProductProductPhoto.ProductPhotoID'
            ],
            order: sequelize.literal('TotalAmount DESC'),
            subQuery: false,
            limit: 5
        });
    }
}

module.exports = productSearch;