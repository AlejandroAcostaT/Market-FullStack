import './Pagination.css';

function Pagination() {

  return (
      <div className='container pagination-container'>
        <button className='button button__main'> Previous </button>
        <h3 className='pagination-current'>1</h3>
        <button className='button button__main'> Next </button>
      </div>
  );
}

export default Pagination;