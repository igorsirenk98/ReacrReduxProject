const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Op = Sequelize.Op;

const productSearch = {
    getBikes(db) {
        return db.product.findAll({
            attributes: ['Name', 'ProductNumber', 'Color', 'ListPrice'],
            include: [{
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: ['Quantity'],
                    model: db.transactionHistory
                },
                {
                    attributes: ['ProductPhotoID'],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: ['ThumbnailPhotoFileName'],
                        model: db.productPhoto
                    }]
                },
                {
                    attributes: ['ProductDescriptionID'],
                    model: db.productDescriptionCulture,
                    where: {
                        CultureID: 'en'
                    },
                    include: [{
                        attributes: ['Description'],
                        model: db.productDescription
                    }]
                }
            ]
        });
    },
    getTopProducts(db) {
        return db.product.findAll({
            attributes: [
                [sequelize.fn('sum', sequelize.col('Quantity')), 'TotalAmount'],
                'ProductID', 'Name'
            ],
            include: [{
                    attributes: [],
                    model: db.transactionHistory
                },
                {
                    attributes: ['Name'],
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: ['ProductPhotoID'],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: ['ThumbnailPhotoFileName'],
                        model: db.productPhoto
                    }]
                }
            ],
            group: [
                'Product.ProductID',
                'Product.Name',
                'ProductSubcategory.Name',
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
    getProductBySubstr(db, substr) {
        return db.product.findAll({
            attributes: ['Name', 'ProductNumber', 'Color',
                'ListPrice', 'ProductProductPhoto.ProductPhotoID',
                'ProductProductPhoto->ProductPhoto.ThumbnailPhotoFileName',
                'ProductDescriptionCulture->ProductDescription.Description'
            ],
            include: [{
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: [],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: [],
                        model: db.productPhoto
                    }]
                },
                {
                    attributes: [],
                    model: db.productDescriptionCulture,
                    where: {
                        CultureID: 'en'
                    },
                    include: [{
                        attributes: [],
                        model: db.productDescription,
                    }]
                }
            ],
            where: {
                [Op.or]: [{
                    productName: {
                        [Op.like]: `%${substr}%`
                    }
                },{
                    '$productDescriptionCulture->productDescription.Description$': {
                        [Op.like]: `%${substr}%`
                    }
                }]
            },
            raw: true
        });
    }
}

module.exports = productSearch;