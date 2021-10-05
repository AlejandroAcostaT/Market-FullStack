import './Product.css';
import ProductHeader from './productHeader/ProductHeader';
import ProductItem from './productItem/ProductItem';
import Pagination from '../../shared/pagination/Pagination';

function Product() {

  return (
      <div className='container-main'>
          <ProductHeader/>
          <div className='table container'>
                <div className='table--header container'>
                    <h3 className='table--title table--title__medium'>Name</h3>
                    <h3 className='table--title table--title__big'>Description</h3>
                    <h3 className='table--title table--title__medium'>Price</h3>
                    <h3 className='table--title table--title__medium'>Status</h3>
                    <h3 className='table--title'>Edit</h3>
                    <h3 className='table--title'>Delete</h3>
                </div>
                <ProductItem/>
                <ProductItem/>
          </div>
          <Pagination/>
      </div>
  );
}

export default Product;