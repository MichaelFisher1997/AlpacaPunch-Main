import React , { useState } from 'react';
import './pageCSS/product.css';
// import productTest from "./productTest.json";
import products from "../DBfiles/jsonFiles/Products.json";
//import {cart, products} from '../components/cart/Cart'


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

                            <img className='product_image' src={products.icon} width="100" height="100" alt='prod_image'/>
                            <br/>
                            
                            <p><strong>{products.prodName}</strong></p>
                            <p>{products.prodDescription}</p>
                            <p>Price: {products.price}</p>
                            <button value={[products.prodName,products.price]} value2={products.price} className='button_add' key={products.productID}  onClick={addItemToCart}>Add</button >
                            <p></p>
                            <button value={products.price}>But now</button>
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


