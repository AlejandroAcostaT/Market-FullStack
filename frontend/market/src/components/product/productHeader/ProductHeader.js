import './ProductHeader.css';

const ProductHeader = ({setProductFilter, productFilter})=> {

  return (
      <div className='container'>
        <h1 className='headerTitle headerTitle__secondary'>List of Products</h1>

        <div className='header'>
            <div className='header-content header-content__left'>
                <h2 className='headerSubtitle'>Filter by Status:</h2>

                <button 
                  className={productFilter === undefined ? 'button button__first button__main':'button button__first'} 
                  onClick={()=>setProductFilter(undefined)}
                > All </button>

                <button 
                  className={productFilter === true ? 'button button__main':'button'} 
                  onClick={()=>setProductFilter(true)}
                > Active </button>

                <button 
                  className={productFilter === false ? 'button button__main':'button'} 
                  onClick={()=>setProductFilter(false)}
                > Hidden </button>
            </div>

            <div className='header-content header-content__right'>
                <button className='button button__main'>Add Product +</button>
            </div>
        </div>
        
      </div>
    
  );
}

export default ProductHeader;