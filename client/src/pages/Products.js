import React from 'react';
import getProducts from './product_Interface';
import './pageCSS/product.css';

const Cart = () => {return (
  <div className='Product'
    style={{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
      height: '100vh'
    }}
  >
    <p>{getProducts()}</p>
      
    </div>

)}
  

export default Cart;