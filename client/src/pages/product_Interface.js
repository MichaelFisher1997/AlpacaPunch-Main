import React from 'react';

import productTest from "./productTest.json";






export default function getProducts()
{

    return (
        <div className="products">
            
            <br></br>

            {
                productTest.map(productTest => {
                    return (
                        <div className='productCard' ley={productTest.productID}>

                            <img src={productTest.icon}/>
                            <br/>
                            
                            <p><strong>{productTest.prodName}</strong></p>
                            <p>{productTest.prodDescription}</p>
                            <p>Price: {productTest.price}</p>
                            <button>Add</button>
                            <p></p>
                        </div>
                    )
                })
            }
        </div>
    );
}


