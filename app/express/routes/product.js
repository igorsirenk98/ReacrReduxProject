module.exports = (app, db) => {
  app.get('/', (req, res) => {
    db.Product.belongsTo(db.ProductSubcategory, {
      as: 'ProductInfo', foreignKey: 'ProductSubcategoryID'
    });
    db.ProductSubcategory.hasMany(db.Product, { foreignKey: 'ProductSubcategoryID' });
    db.Product.findAll({
      attributes: ['Name', 'ProductNumber', 'Color'],
      include: [{
        model: db.ProductSubcategory, as: 'ProductInfo',
        where: {
          ProductCategoryID: 1
        }
      }]
    })
      .then(result => res.json(result))
  });

  app.get('/product/:id', (req, res) => {
    db.Product.findByPk(req.params.id)
      .then(result => res.json(result))
  });
}