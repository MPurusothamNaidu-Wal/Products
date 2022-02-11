import axios from "axios";
import { useState } from "react";
const Categories = () => {
    let [category, setCategory] = useState([])
    axios.get('https://fakestoreapi.com/products/categories')
    .then( (response) => {
        setCategory(response.data)
        
    } )
    return(
        <div className="categoryClass">
            <h1>Welcome to Category</h1>
            { category.map( (val, index) => {
                return (
                    <a className="App-link" href="#" > { val + " | "}  </a>
                )
            }) }
        </div>
    )
}
export default Categories;