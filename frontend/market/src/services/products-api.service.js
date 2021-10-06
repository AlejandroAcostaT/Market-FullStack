
const api = 'http://localhost:8000/products';

const ApiProductsService = {

    listProducts: async (limit, page, status) => {
        const url=api+"?limit="+String(limit)+"&page="+String(page)+"&status="+String(status);
        const res = await fetch(url);
        const data = await res.json();
        return data;            
    },

    addProduct: async (product) => {

    },

    editProduct: async (id) => {
        const url=api+'/'+id;
    },

    deleteProduct: async (id) => {
        const url=api+'/'+id;
        const res = await fetch(url, {method: 'DELETE'});
        return res.status;
    }
}

export default ApiProductsService;