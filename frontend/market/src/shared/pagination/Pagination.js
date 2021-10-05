import './Pagination.css';

function Pagination() {

  return (
      <div className='container pagination-container'>
        <button className='button pagination-button pagination-button__disabled' disabled> Previous </button>
        <button className='button pagination-button pagination-buttonNumber pagination-buttonNumber__active' disabled> 1 </button>
        <button className='button pagination-button pagination-buttonNumber'> 2 </button>
        <button className='button pagination-button pagination-buttonNumber'> 3 </button>
        <button className='button pagination-button pagination-button__active'> Next </button>
      </div>
  );
}

export default Pagination;