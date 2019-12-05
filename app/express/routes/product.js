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

router.get('/search=:productName', (req, res) => {
	productSearch.getProductBySubstr(product, req.params.productName)
		.then(result => {
			console.log(req.params.productName);
			return res.json(result);
		})
});

module.exports = router;