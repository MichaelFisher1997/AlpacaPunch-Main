import React from 'react';
import {cart, products} from '../components/cart/Cart'
import Cart from '../components/cart/cart2';
  
const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Cart</h1>
      <p>{Cart()}</p>
    </div>
  );
};
  
export default Contact;