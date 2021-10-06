import './App.css';
import Header from './components/header/Header';
import Product from './components/product/Product';

function App() {

  return (
    <div>
      <Header/>
      <Product/>
    </div>
  );

}

export default App;

/*
<button className='delete-button' 
      onClick={() => { 
        if (window.confirm('Are you sure you wish to delete this item?')) onDel("AAAAA")
      }}>DELETE</button>
*/