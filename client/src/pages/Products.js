import React from 'react';
import getProducts from './product_Interface';

const Cart = () => {return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'left',
      height: '100vh'
    }}
  >
    <h1></h1>
      {getProducts()}
    </div>

)}
  

export default Cart;