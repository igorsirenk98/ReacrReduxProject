const express = require('express');
const router = express.Router();
const product = require('../models/basicModels/product');
const productSearch = require('../models/productSearch');
const transactionHistory = require('../models/basicModels/transactionHistory');

router.get('/', (req, res) => {
	productSearch.getBikes(product)
		.then(result => res.json(result))
});

router.get('/top-products', (req, res) => {
	productSearch.getTopProducts(product)
		.then(result => res.json(result))
});

// router.get('/:id', (req, res) => {
// 	db.Product.findByPk(req.params.id)
// 		.then(result => res.json(result))
// });

module.exports = router;