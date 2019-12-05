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
const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Op = Sequelize.Op;

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
                    model: productProductPhoto,
                    include: [{
                        attributes: ['ThumbnailPhotoFileName'],
                        model: productPhoto
                    }]
                }
            ],
            group: [
                'Product.ProductID',
                'Product.Name',
                'ProductSubcategory.ProductSubcategoryID',
                'ProductProductPhoto.ProductPhotoID',
                'ProductProductPhoto->ProductPhoto.ThumbnailPhotoFileName',
                'ProductProductPhoto->ProductPhoto.ProductPhotoID'
            ],
            order: sequelize.literal('TotalAmount DESC'),
            subQuery: false,
            limit: 5
        });
    },
    getProductBySubstr(model, substr) {
        return model.findAll({
            attributes: ['Name', 'ProductNumber', 'Color',
                'ListPrice', 'ProductProductPhoto.ProductPhotoID',
                'ProductProductPhoto->ProductPhoto.ThumbnailPhotoFileName',
                'ProductDescriptionCulture.ProductDescriptionID',
                'ProductDescriptionCulture->ProductDescription.Description',
                // [Sequelize.col('ProductDescription.Description'), 'descr']
            ],
            include: [{
                    model: productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: [],
                    model: productProductPhoto,
                    include: [{
                        attributes: [],
                        model: productPhoto
                    }]
                },
                {
                    attributes: [],
                    model: productDescriptionCulture,
                    where: {
                        CultureID: 'en'
                    },
                    include: [{
                        // attributes: [Sequelize.col('Product.Name'), 'name'],
                        model: productDescription,
                        // where: {
                        //     [Op.or]: [{
                        //         // Description: {
                        //         //     [Op.like]: `%${substr}%`
                        //         // },
                        //         // name: {
                        //         //     [Op.like]: `%${substr}%`
                        //         // }
                        //     }]
                        // }
                    }]
                }
            ],
            where: {
                [Op.or]: [{
                    productName: {
                        [Op.like]: `%${substr}%`
                    },
                    // descr: {
                    //     [Op.like]: `%${substr}%`
                    // }
                }]
            },
            raw: true
        });
    }
}

module.exports = productSearch;