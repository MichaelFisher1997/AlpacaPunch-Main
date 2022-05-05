import React , { useState } from 'react';
import './pageCSS/product.css';
import productTest from "./productTest.json";
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
                productTest.map(productTest => {
                    return (
                        <>

                        
                        <div className='product_card' style={{
                            width: "150px", 
                            margin: "15px"
                        }}>

                            <img className='product_image' src={productTest.icon} width="100" height="100" alt='prod_image'/>
                            <br/>
                            
                            <p><strong>{productTest.prodName}</strong></p>
                            <p>{productTest.prodDescription}</p>
                            <p>Price: {productTest.price}</p>
                            <button value={[productTest.prodName,productTest.price]} value2={productTest.price} className='button_add' key={productTest.productID}  onClick={addItemToCart}>Add</button >
                            <p></p>
                        </div>
                        

                        </>
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


