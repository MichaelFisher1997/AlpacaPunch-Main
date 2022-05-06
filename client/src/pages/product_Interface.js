import React , { useState } from 'react';
import './pageCSS/product.css';
// import productTest from "./productTest.json";
import products from "../DBfiles/jsonFiles/Products.json";
//import {cart, products} from '../components/cart/Cart'
//import { payable } from '../components/Navbar/ZilAssets/zilFunctions';


import testBlockchain from '../components/Navbar/ZilAssets/PayableZil';


//If we can remove the CSS then do! 

export default function GetProducts()
{
    const [cart, setCart] = useState([]);
    const total = 0;

    function addItemToCart(e) {
      const item = e.target.value;
      //addTotal(e.target.value2)
      console.log(item);
      setCart([...cart, item]);
    }
    function addTotal(int){
        total = total + int;
    }

    //recreate for local storage
    var newCart ={
        items: {},

        save : () => {
            localStorage.setItem("cart", JSON.stringify(newCart.items))
        },
        load : () => {
            newCart.items = localStorage.getItem("cart");
            if (newCart.items == null) { newCart.items = {}; }
            else { newCart.items = JSON.parse(newCart.items); }
          },

        nuke : () => {
            newCart.items = {};
            localStorage.removeItem("cart");
            newCart.list();
        },

        

    };

    //localStorage.setItem("cartArry", JSON.stringify());
    //localStorage.PricaTotal = 0;
    //var data = JSON.parse(localStorage.getItem('apogeLiveLobbyData'));
    
    return (
        <div style={{ display: "flex", flexDirection: "row", alignSelf: "flex-start" }}>
            {
                products.map(products => {
                    return (
                        <div>

                        
                        <div className='product_card' style={{
                            width: "150px", 
                            margin: "15px"
                        }}>

                            <img className='product_image' src={products.Product.source} width="100" height="100" alt='prod_image'/>
                            <br/>
                            
                            <p><strong>{products.Product.prodName}</strong></p>
                            <p>{products.Product.prodDescription}</p>
                            <p>Price: {products.Product.price}</p>
                            <button value={[products.Product.prodName,products.Product.price]} value2={products.Product.price} className='button_add' key={products.Product.productID}  onClick={addItemToCart}>Add</button >
                            <p></p>
                            <button value={products.Product.price} onClick={testBlockchain} >Buy now</button>
                            
                        </div>
                        

                        </div>
                    )
                })
                
            }
            <div className='cart'>
                            Cart
                            <ul>
                                {cart.map(item => <li key={item}>{item}</li>)}
                            </ul>
                            <h1>New cart</h1>
                            {/*data*/}
                            Total: {total}
                            <button className='clearCart' /*onClick={localStorage.clear()}*/>clear</button>


                        </div>
            
        </div>
    );
}


