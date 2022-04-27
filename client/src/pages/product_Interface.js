import React from 'react';
import ReactDOM from 'react-dom/client';
import productTest from "./productTest.json";

//const productArray = [];


export default function getProducts()
{
    
    return (
        <div className="products">
            <br></br>

            {
                productTest.map(productTest => {
                    return (
                        <div className='productCard' ley={productTest.productID}>
                            {/*image link here */}
                            <p><strong>{productTest.prodName}</strong></p>
                            <p>{productTest.prodDescription}</p>
                            <p>Price: {productTest.price}</p>
                            <p></p>
                        </div>
                    )
                })
            }
        </div>
    );
}


