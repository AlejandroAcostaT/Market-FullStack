import './ProductItem.css';

const ProductItem = ({product, onDelete, onEdit}) => {

  return (
      <div className='container item'>
        <h4 className='item-text item-text__medium'>{product.name}</h4>
        <h4 className='item-text item-text__big'>{product.description}</h4>
        <h4 className='item-text item-text__medium'>{product.price} &euro;</h4>
        <h4 className='item-text item-text__medium'>{product.active ? 'Active' : 'Hidden'}</h4>
        <h4 className='item-text item-text__clickable' onClick={()=>onEdit(product)}>Edit</h4>
        <h4 className='item-text item-text__clickable' onClick={()=>onDelete(product._id)}>Delete</h4>
      </div>
    
  );
}

export default ProductItem;