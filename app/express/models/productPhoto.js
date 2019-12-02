module.exports = (sequelize, DataTypes) => {
    const ProductPhoto = sequelize.define('ProductPhoto', {
        id: {
            field: 'ProductPhotoID',
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        ThumbnailPhotoFileName: {
            field: 'ThumbnailPhotoFileName',
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false,
        tableName: 'ProductPhoto',
        schema: 'Production'
    });

    return ProductPhoto;
}