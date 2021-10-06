
const api = 'http://localhost:8000/products';

const ApiProductsService = {

    listProducts: async (limit, page, status) => {
        const url=api+"?limit="+String(limit)+"&page="+String(page)+"&status="+String(status);
        const res = await fetch(url);
        const data = await res.json();
        return data;            
    },

    addProduct: async (product) => {
        const res = await fetch(api, 
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            });
        const data = await res.json();
        return data;
    },

    editProduct: async (id, product) => {
        const url=api+'/'+id;
        const res = await fetch(url, 
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product)
            });
        const data = await res.json();
        return data;
    },

    deleteProduct: async (id) => {
        const url=api+'/'+id;
        const res = await fetch(url, {method: 'DELETE'});
        return res.status;
    }
}

export default ApiProductsService;