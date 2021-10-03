const ProductsDao = require('../daos/products.dao');

module.exports = class ProductsService {

    static instance;

    constructor(){}

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductsService();
        }
        return this.instance;
    }

    create(resource) {
        return ProductsDao.getInstance().addProduct(resource);
    }

    list(limit, page) {
        return ProductsDao.getInstance().listProducts(limit, page);
    };

    readById(resourceId) {
        return ProductsDao.getInstance().getProductById(resourceId);
    }

    updateById(resourceId, resource) {
        return ProductsDao.getInstance().updateProductById(resourceId, resource);
    }

    deleteById(resourceId) {
        return ProductsDao.getInstance().removeProductById(resourceId);
    }
}