import './ProductItem.css';

function ProductItem() {

  return (
      <div className='container item'>
        <h4 className='item-text item-text__medium'>Patatas</h4>
        <h4 className='item-text item-text__big'>Patatas Blancas</h4>
        <h4 className='item-text item-text__medium'>50.00 Euros</h4>
        <h4 className='item-text item-text__medium'>Activo</h4>
        <h4 className='item-text item-text__clickable'>Edit</h4>
        <h4 className='item-text item-text__clickable'>Delete</h4>
      </div>
    
  );
}

export default ProductItem;