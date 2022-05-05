import React from 'react';
import orders from "../DBfiles/jsonFiles/Order_Line.json";
  
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
      }}>
      {
        orders.find(order => order.transacID === "3258", function(order)  {
          return (
            <p>wee</p>
          )
        })
      })
      
      {/* <p>{getOrders()}</p> */}
      
    </div>
  );
};
  
export default Shipping;
