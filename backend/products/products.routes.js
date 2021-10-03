const express = require('express');
const ProductsController = require('./controllers/products.controller');
const ProductsMiddleware = require('./middlewares/products.middleware');

const router = express.Router();

const productsController = new ProductsController();
const productsMiddleware = new ProductsMiddleware();


router.get('/', [
    productsController.listProducts
]);

router.get('/:productId', [
    productsController.getProductById
]);

router.post('/', [
    productsMiddleware.validateRequiredCreateProductBodyFields,
    productsController.createProduct
]);

router.put('/:productId',[
    productsMiddleware.validateRequiredUpdateProductBodyFields,
    productsController.updateProduct
]);

router.delete('/:productId', [
    productsController.removeProduct
]);

module.exports = router;