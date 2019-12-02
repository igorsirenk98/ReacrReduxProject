module.exports = (app, db) => {
  app.get('/productPhoto/:id', (req, res) => {
    db.ProductProductPhoto.findByPk(req.params.id)
      .then(result => res.json(result))
  });
}