import './ProductForm.css';

const ProductForm = ({product, isEdit, changeFormStatus})=> {

  return (
    <div className='container formContainer'>
        <div className='form form-title'>
            <h1>{!isEdit ? 'New Product' : 'Edit Product'}</h1>
        </div>

        <div className='form'>
            <label className='form-label'>Name </label>
            <input className='form-input' type='text' value={product.name} placeholder='Add Name'/>
        </div>
        
        <div className='form'>
            <label className='form-label'>Description </label>
            <input className='form-input' type='text'value={product.description} placeholder='Add Description'/>
        </div>
        
        <div className='form'>
            <label className='form-label'>Price </label>
            <input className='form-input' type='number' value={product.price} min={0} placeholder='Add Price'/>
        </div>

        <div className='form'>
            <label className='form-label'>Active</label>
            <input className='form-input form-input__check' type='checkbox' checked={product.active}/>
        </div>        
        
        <div className='buttonContainer'>
            <button className='button button__form' onClick={()=>changeFormStatus()}>Cancel</button>
            
            <input className='button button__main button__form' type='submit' value={isEdit ? 'Edit Product' : 'Add Product'}/>
        </div>
    </div>    
  );

}

export default ProductForm;