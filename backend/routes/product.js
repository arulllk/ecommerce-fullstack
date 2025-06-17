const express = require('express')
const router = express.Router();
const {createProduct, getAllProducts} = require('../controllers/product');

router.route('/').post(createProduct)
router.route('/').get(getAllProducts);

module.exports = router;
