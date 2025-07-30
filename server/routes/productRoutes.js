const express = require('express');
const { getAllProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Get all products
router.get('/', getAllProducts);

// Get product by ID
router.get('/:id', getProductById);

module.exports = router; 