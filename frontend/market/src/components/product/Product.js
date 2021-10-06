import './Product.css';
import ProductHeader from './productHeader/ProductHeader';
import ProductItem from './productItem/ProductItem';
import Pagination from '../../shared/pagination/Pagination';
import ApiProductsService from '../../services/products-api.service';

import {useEffect, useState} from 'react';

function Product() {

    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(0);
    const [productFilter, setProductFilter] = useState(undefined)

    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await ApiProductsService.listProducts(5,currentPage,productFilter);
            setProducts(productsFromServer.products)
            setPagination({
                totalProducts: productsFromServer.totalProducts,
                totalPages: productsFromServer.totalPages,
            })
        };

        getProducts();
    }, [currentPage, productFilter]);

    return (
        <div className='container-main'>
            <ProductHeader setProductFilter={(filter)=>setProductFilter(filter)} productFilter={productFilter}/>
            <div className='table container'>
                    <div className='table--header container'>
                        <h3 className='table--title table--title__medium'>Name</h3>
                        <h3 className='table--title table--title__big'>Description</h3>
                        <h3 className='table--title table--title__medium'>Price</h3>
                        <h3 className='table--title table--title__medium'>Status</h3>
                        <h3 className='table--title'>Edit</h3>
                        <h3 className='table--title'>Delete</h3>
                    </div>
                    {products.length > 0 && 
                        products.map((product, index) => (
                            <ProductItem
                                product={product}
                                key={index}
                            />
                        ))
                    }
            </div>
            <Pagination pagination={pagination} currentPage={currentPage} setCurrentPage={(i)=>setCurrentPage(i)}/>
        </div>
  );
}

export default Product;