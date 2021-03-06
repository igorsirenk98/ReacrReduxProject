const productSearch = require('../models/productSearch');

module.exports = (app, db) => {
	app.get('/products/top-products', (req, res) => {
		productSearch.getTopProducts(db)
			.then(result => res.json(result))
	});

	app.get('/products/search=:productName', (req, res) => {
		productSearch.getProductsBySubstr(db, req.params.productName)
			.then(result => res.json(result))
	});

	app.get('/products/productId=:id', (req, res) => {
		productSearch.getProductById(db, req.params.id)
			.then(result => res.json(result))
	});
}
