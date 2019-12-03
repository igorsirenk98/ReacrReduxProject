const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const ProductActions = require('../actions/productActions');

router.get('/', (req, res) => {
	ProductActions.getTopProducts(Product)
		.then(result => res.json(result))
});

// router.get('/:id', (req, res) => {
// 	db.Product.findByPk(req.params.id)
// 		.then(result => res.json(result))
// });

module.exports = router;