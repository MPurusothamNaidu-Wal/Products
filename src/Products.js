import { useState, useEffect } from "react";
import axios from "axios";
const Products = (props) => {
        axios.get(`https://fakestoreapi.com/products/${props.num}`).then( (res) => {
            if(res.data.id != undefined){
                console.log(res.data.id);
                document.getElementById("productId").textContent = `Id : ${res.data.id}`           
                document.getElementById("productTitle").textContent = ` ${res.data.title}`           
                document.getElementById("productPrice").textContent = ` ${res.data.price}$`    
                document.getElementById("productDescription").textContent = ` ${res.data.description}`    
                document.getElementById("productCategory").textContent = `Category: ${res.data.category}`    
                document.getElementById("productImg").src = ` ${res.data.image}`    
                document.getElementById("productRating").textContent = `Rating: ${res.data.rating.rate}`
                document.getElementById("productCount").textContent = `Count: ${res.data.rating.count}`
            }

        })
    return(
        <div >           
            <h1>Product Details</h1>
            <main>
                <img id="productImg" ></img>
                <div className="ProductSection">
                <h1 id="productTitle"></h1>
                <h2 id="productId"></h2>
                <p id="productDescription" className="Productsdesc"></p>
                <h2 id="productCategory"></h2>
                <section>
                    <h2 id="productPrice"></h2>
                    <h2 id="productRating"></h2>
                    <h2 id="productCount"></h2>
                </section>
                </div>
            </main>
        </div>
    )
};
export default Products;