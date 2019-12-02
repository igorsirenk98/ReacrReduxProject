module.exports = (sequelize, DataTypes) => {
    const ProductProductPhoto = sequelize.define('ProductProductPhoto', {
        id: {
            field: 'ProductPhotoID',
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },
    {
        timestamps: false,
        tableName: 'ProductProductPhoto',
        schema: 'Production'
    });

    return ProductProductPhoto;
}