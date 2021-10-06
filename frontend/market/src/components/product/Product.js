import './Product.css';

import ProductHeader from './productHeader/ProductHeader';
import ProductItem from './productItem/ProductItem';
import ProductForm from './productForm/ProductForm';
import Pagination from '../../shared/pagination/Pagination';

import ApiProductsService from '../../services/products-api.service';

import {useEffect, useState} from 'react';

function Product() {

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [productFilter, setProductFilter] = useState(undefined);
  const [refresh, setRefresh] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

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
  }, [currentPage, productFilter, refresh]);

  //DELETE PRODUCT
  const deleteProduct = async (id) => {
    await ApiProductsService.deleteProduct(id);
    setRefresh(!refresh);
  }

  //CHANGE TO FORM
  const changeFormStatus = () => {
    setIsForm(!isForm);
  }

  const showAddForm = () => {
    changeFormStatus();
    setIsEdit(false);
  }

  const showEditForm = (product) => {
    changeFormStatus();
    setIsEdit(true);
    setSelectedProduct(product)
  }

  const showList = () => {
    changeFormStatus();
    setSelectedProduct({})
  }

  return (
    <div className='container-main'>
        
      { 
        !isForm &&
        <>
          <ProductHeader 
            title={'List of Products'}
            isForm = {isForm}
            setProductFilter={(filter)=>setProductFilter(filter)} 
            productFilter={productFilter}
            changeFormStatus={()=>showAddForm()}
          />

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
                  onDelete={(id)=> {
                    if(window.confirm('Are you sure you want to delete this Product?')) 
                      deleteProduct(id)
                  }}
                  onEdit={(product)=> showEditForm(product)}
                />
              ))
            }
          </div>
          <Pagination 
            totalPages={pagination.totalPages} 
            currentPage={currentPage} 
            setCurrentPage={(i)=>setCurrentPage(i)}
          />
        </>
      }
        
      {
        isForm &&
        <ProductForm 
          isEdit={isEdit} 
          product={selectedProduct} 
          changeFormStatus={()=>showList()}
        />
      }
        
    </div>
  );
}

export default Product;