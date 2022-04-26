import React from 'react';
import Orders from "./jsonFiles/orders.json";


//JSON file reader for order
export default function getOrders()
{
    console.log("we made it here");
    return (
        <div className="orders">
            <br></br>
            <h1>Thank you for ordering with us!</h1>
            <h2>Here's your summary:</h2>
            {
                Orders && Orders.map(order => {
                    return (
                        <div className="order-box" key={order.transacID}>
                        <br></br><strong>Transaction ID: {order.transacID}</strong><br></br>
                        <p>place productName with order SKU here</p><br></br>
                        <p>Order amount: x{order.orderAmount}</p>
                        <p>Total: £{order.orderTotal}</p>
                        <p>Date ordered: {order.orderDate}</p>
                    </div>
                    )
                })
            }
        </div>
    );
}

// // GET ALL CUSTOMERS
// app.get('/customers', async (req, res) => {
//     try {
//         const result = await db.pool.query("select * from customers");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });
// // GET ALL ORDERS
// app.get('/orders', async (req, res) => {
//     try {
//         const result = await db.pool.query("select * from orders");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });
// // GET ALL PRODUCTS
// app.get('/products', async (req, res) => {
//     try {
//         const result = await db.pool.query("select * from products");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });
// // GET ALL INVENTORY ITEMS
// app.get('/inventory', async (req, res) => {
//     try {
//         const result = await db.pool.query("select * from inventory");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });
// // GET ALL MANUFACTURERS
// app.get('/', async (req, res) => {
//     try {
//         const result = await db.pool.query("select * from manufacturers");
//         res.send(result);
//     } catch (err) {
//         throw err;
//     }
// });