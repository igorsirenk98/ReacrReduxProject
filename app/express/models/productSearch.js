const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Op = Sequelize.Op;

const productSearch = {
    getAllProducts(db) {
        return db.product.findAll({
            attributes: ['productId', 'name', 'productNumber', 'color', 'listPrice'],
            include: [{
                    attributes: ['name'],
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: ['productPhotoId'],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: ['thumbnailPhoto'],
                        model: db.productPhoto
                    }]
                }
            ]
        });
    },
    getTopProducts(db) {
        return db.product.findAll({
            attributes: [
                [sequelize.fn('sum', sequelize.col('quantity')), 'totalAmountSold'],
                'productId', 'name', 'productNumber', 'color', 'listPrice'
            ],
            include: [{
                    attributes: [],
                    model: db.transactionHistory
                },
                {
                    attributes: ['name'],
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: [],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: ['largePhoto'],
                        model: db.productPhoto
                    }]
                }
            ],
            group: [
                'product.productId',
                'product.name',
                'product.productNumber',
                'product.color',
                'product.listPrice',
                'productSubcategory.name',
                'productSubcategory.productSubcategoryId',
                'productProductPhoto->productPhoto.largePhoto',
                'productProductPhoto->productPhoto.productPhotoId'
            ],
            order: sequelize.literal('totalAmountSold DESC'),
            subQuery: false,
            limit: 5,
            raw: true
        }).then(result => {
            result.forEach(item => {
                item['productProductPhoto.productPhoto.largePhoto'] = item['productProductPhoto.productPhoto.largePhoto'].toString('base64');
            });

            return result;
        });
    },
    getProductBySubstr(db, substr) {
        return db.product.findAll({
            attributes: ['productId', 'name', 'productNumber', 'color',
                'listPrice'
            ],
            include: [{
                    attributes: ['name'],
                    model: db.productSubcategory,
                    where: {
                        ProductCategoryID: 1
                    }
                },
                {
                    attributes: [],
                    model: db.productProductPhoto,
                    include: [{
                        attributes: ['largePhoto'],
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
                }, {
                    '$productDescriptionCulture->productDescription.description$': {
                        [Op.like]: `%${substr}%`
                    }
                }]
            },
            raw: true
        }).then(result => {
            result.forEach(item => {
                item['productProductPhoto.productPhoto.largePhoto'] = item['productProductPhoto.productPhoto.largePhoto'].toString('base64');
            });

            return result;
        });
    },
    getProductById(db, id) {
        return db.product.findOne({
                attributes: ['productId', 'name', 'productNumber', 'color',
                    'weight', 'weightUnitMeasureCode', 'size', 'sizeUnitMeasureCode',
                    'listPrice','productDescriptionCulture->productDescription.description'
                ],
                include: [{
                        attributes: ['name'],
                        model: db.productSubcategory,
                        where: {
                            ProductCategoryID: 1
                        }
                    },
                    {
                        attributes: [],
                        model: db.productProductPhoto,
                        include: [{
                            attributes: ['largePhoto'],
                            model: db.productPhoto
                        }]
                    },
                    {
                        attributes: ['productDescriptionId'],
                        model: db.productDescriptionCulture,
                        where: {
                            CultureID: 'en'
                        },
                        include: [{
                            attributes: ['description'],
                            model: db.productDescription,
                        }]
                    }
                ],
                where: {
                    id
                },
                raw: true
            })
            .then(result => {
                result['productProductPhoto.productPhoto.largePhoto'] = result['productProductPhoto.productPhoto.largePhoto'].toString('base64');
                return result;
            });
    }
}

module.exports = productSearch;