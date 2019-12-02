module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            field: 'ProductID',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        productName: {
            field: 'Name',
            type: DataTypes.STRING
        },
        productNumber: {
            field: 'ProductNumber',
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'Product',
        schema: 'Production'
    });

    return Product;
}