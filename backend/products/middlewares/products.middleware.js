module.exports = class ProductsMiddleware {
    static instance;

    static getInstance(){
        if(!this.instance){
            this.instance = new ProductsMiddleware();
        }

        return this.instance;
    }

    validateRequiredCreateProductBodyFields(req, res, next) {
        if (req.body && req.body.name && req.body.description && req.body.price && (req.body.active != undefined)) {
            next();
        } else {
            res.status(400).send({error: 'Missing required product fields'});
        }
    }

    validateRequiredUpdateProductBodyFields(req, res, next) {
        if (req.body && req.body.name && req.body.description && req.body.price && (req.body.active != undefined)) {
            next();
        } else {
            res.status(400).send({error: 'Missing required product fields'});
        }
    }

    validateLimitAndPageQuery(req, res, next) {
        if(req.query && req.query.limit && req.query.page && req.query.status){
            if(req.query.limit < 0 || req.query.page < 0){
                req.query.limit = 5;
                req.query.page = 0;
            }
            if(req.query.status !== 'true' && req.query.status !== 'false'){
                req.query.status = undefined
            }
            next();
        }else{
            res.status(400).send({error: 'Missing required pagination queries'});
        }
        
    }
}