import './ProductForm.css';

import { useState, useEffect } from 'react';

const ProductForm = ({product, isEdit, onCancel, onCreate, onEdit})=> {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(1);
    const [active, setActive] = useState(true);

    useEffect(() => {
        if(isEdit){
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setActive(product.active);
        }
    }, []);

    const submit =(e) =>{
        e.preventDefault();

        if(!name || !description || !price || (price<=0)){
            alert('All form');
            return;
        }

        isEdit ? 
        onEdit(product._id, {name, description, price, active}) : 
        onCreate({name, description, price, active});

        setName('');
        setDescription('');
        setPrice(1);
        setActive(true);        
    }

    return (
        <form className='container formContainer' onSubmit={submit}>
            <div className='form form-title'>
                <h1>{!isEdit ? 'New Product' : 'Edit Product'}</h1>
            </div>

            <div className='form'>
                <label className='form-label'>Name* </label>
                <input 
                    className='form-input' 
                    type='text' value={name} 
                    onChange={(e)=>setName(e.target.value)} 
                    placeholder='Add Name'
                />
            </div>
            
            <div className='form'>
                <label className='form-label'>Description* </label>
                <input 
                    className='form-input' 
                    type='text'value={description} 
                    onChange={(e)=>setDescription(e.target.value)} 
                    placeholder='Add Description'
                />
            </div>
            
            <div className='form'>
                <label className='form-label'>Price* </label>
                <input 
                    className='form-input' 
                    type='number' 
                    step='any'
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)} 
                    min={1} 
                    placeholder='Add Price'
                />
            </div>

            <div className='form'>
                <label className='form-label'>Active</label>
                <input 
                    className='form-input form-input__check' 
                    type='checkbox' 
                    checked={active} 
                    value={active} 
                    onChange={(e)=>setActive(e.currentTarget.checked)}
                />
            </div>        
            
            <div className='buttonContainer'>
                <button className='button button__form' onClick={()=>onCancel()}>Cancel</button>
                
                <input 
                    className='button button__main button__form' 
                    type='submit' 
                    value={isEdit ? 'Edit Product' : 'Add Product'}
                />
            </div>
        </form>    
  );

}

export default ProductForm;