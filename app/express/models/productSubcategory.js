module.exports = (sequelize, DataTypes) => {
    const ProductSubcategory = sequelize.define('ProductSubcategory', {
        productCategoryID: {
            field: 'ProductCategoryID',
            type: DataTypes.INTEGER
        },
        productSubcategoryID: {
            field: 'ProductSubcategoryID',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        productName: {
            field: 'Name',
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'ProductSubcategory',
        schema: 'Production'
    });

    return ProductSubcategory;
}