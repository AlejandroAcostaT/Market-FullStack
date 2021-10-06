const mongoose = require('mongoose');

module.exports = class ProductsDao {

    static instance;

    constructor(){}

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductsDao();
        }
        return this.instance;
    }

    productSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            min: 0,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    });

    Product = mongoose.model('Products', this.productSchema);

    async addProduct(productFields){
        const product = new this.Product(productFields);
        return await product.save();
    }

    async listProducts(limit = 5, page = 0, status = undefined) {
        let query = {};
        if(status)
            query = {active: status}
        const products = await this.Product.find(query)
            .skip(limit * page)
            .limit(limit)
            .exec();

        const totalProducts = await this.Product.count(query);
        const totalPages = Math.ceil(totalProducts/limit);
        const currentPage = page;
        return {
            totalProducts: totalProducts,
            products: products,
            totalPages: totalPages,
            currentPage: currentPage+1
        }
    }

    async getProductById(productId){
        return await this.Product.findById(productId);
    }

    async updateProductById(productId, productFields){
        let product = await this.Product.findById(productId);
        if(product){
            for (let i in productFields){
                product[i] = productFields[i];
            }
        }
        return await product.save();
    }

    async removeProductById(productId){
        return await this.Product.deleteOne({_id: productId});
    }
}