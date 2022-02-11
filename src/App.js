import logo from './logo.svg';
import './App.css';
import Products from './Products';
import { useState } from 'react';
import Categories from './Categories';
import Allproducts from './Allproducts';

function App() {
  let [no, setNo] = useState(0);
  return (
    <div className="App">
      
      <input type="number" name={no} onInput={
        (event) => {
          setNo(event.target.value);
        }
      } />
      
      <Categories></Categories>
      <Products num={no} ></Products>
      <Allproducts></Allproducts>
    </div>
  );
}

export default App;
