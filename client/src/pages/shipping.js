import React from 'react';
import getOrders from '../DBfiles/dbOperations';
  
const Shipping = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: 10,
        backgroundColor: "Grey",
        justifyContent: 'Left',
        alignItems: 'Left',
        height: '100vh'
      }}
    >
      <h1></h1>
      {getOrders()}
    </div>
  );
};
  
export default Shipping;
