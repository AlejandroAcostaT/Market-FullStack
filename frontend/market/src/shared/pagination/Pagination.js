import './Pagination.css';

const Pagination = ({totalPages, currentPage, setCurrentPage}) => {
  const pageButtons = [];
  const createPageButtons = () =>{
    //Previous Button
    let classNameBase = 'button pagination-button '
    let className = '';

    currentPage === 0 ?
      className = classNameBase+'pagination-button__disabled' :
      className = classNameBase+'pagination-button__active'

    pageButtons.push(
      <button 
        className={className} 
        key={'previous'} 
        onClick={()=>setCurrentPage(currentPage-1)} 
        disabled={currentPage === 0}
        > Previous </button>
    )

    //Setting Buttons for the number of Pages
    for(let i=0; i<totalPages; i++){
      className='button pagination-button pagination-buttonNumber';
      if(currentPage === i)
        className=className+' pagination-buttonNumber__active'

        pageButtons.push(
          <button className={className} key={i} onClick={()=>setCurrentPage(i)}> {i+1} </button>
        )
    }

    //Next Button
    className = '';
    currentPage+1 === totalPages ?
      className = classNameBase+'pagination-button__disabled' :
      className = classNameBase+'pagination-button__active'

    pageButtons.push(
      <button 
        className={className} 
        key={'next'} 
        onClick={()=>setCurrentPage(currentPage+1)}
        disabled={currentPage+1 === totalPages}
        > Next </button>
    )
    return pageButtons;
  }

  return (
      <div className='container pagination-container'>
        
        {
          createPageButtons()
        }
        
      </div>
  );
}

export default Pagination;