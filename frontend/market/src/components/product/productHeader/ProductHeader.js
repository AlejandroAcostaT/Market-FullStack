import './ProductHeader.css';

function ProductHeader() {

  return (
      <div className='container'>
        <h1 className='headerTitle headerTitle__secondary'>List of Products</h1>

        <div className='header'>
            <div className='header-content header-content__left'>
                <h2 className='headerSubtitle'>Filter by Status:</h2>

                <button className='button button__main button__first'>All</button>
                <button className='button'>Active</button>
                <button className='button'>Hidden</button>
            </div>

            <div className='header-content header-content__right'>
                <button className='button button__main'>Add Product +</button>
            </div>
        </div>
        
      </div>
    
  );
}

export default ProductHeader;