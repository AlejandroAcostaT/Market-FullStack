const ProductsService = require('../services/products.service')

module.exports = class ProductsController {
    constructor() {}

    async listProducts(req, res) {
        const productsService = ProductsService.getInstance();
        const limit = Number(req.query.limit) || 5;
        const page = Number(req.query.page) || 0;
        const status = req.query.status ? req.query.status : null;
        const products = await productsService.list(limit, page, status);
        res.status(200).send(products);
    }

    async getProductById(req, res) {
        const productsService = ProductsService.getInstance();
        const product = await productsService.readById(req.params.productId);
        res.status(200).send(product);
    }

    async createProduct(req, res) {
        const productsService = ProductsService.getInstance();
        const productCreated = await productsService.create(req.body);
        res.status(200).send(productCreated);
    }

    async updateProduct(req, res) {
        const productsService = ProductsService.getInstance();
        const id = req.params.productId;
        const productUpdated = await productsService.updateById(id, req.body);
        res.status(200).send(productUpdated);
    }

    async removeProduct(req, res){
        const productsService = ProductsService.getInstance();
        await productsService.deleteById(req.params.productId);
        res.status(204).send('product deleted successfully');
    }
}