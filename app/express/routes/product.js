const productSearch = require('../models/productSearch');

module.exports = (app, db) => {
	app.get('/products', (req, res) => {
		productSearch.getBikes(db)
			.then(result => res.json(result))
	});

	app.get('/products/top-products', (req, res) => {
		productSearch.getTopProducts(db)
			.then(result => res.json(result))
	});

	app.get('/products/search=:productName', (req, res) => {
		productSearch.getProductBySubstr(db, req.params.productName)
			.then(result => res.json(result))
	});
}
