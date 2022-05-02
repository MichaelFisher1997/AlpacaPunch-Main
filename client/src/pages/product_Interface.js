import React from 'react';
import './pageCSS/product.css';
import productTest from "./productTest.json";


//If we can remove the CSS then do! 



export default function getProducts()
{
    
    return (
        <div style={{ display: "flex", flexDirection: "row", alignSelf: "flex-start" }}>
            {
                productTest.map(productTest => {
                    return (
                        <div className='product_card' style={{
                            width: "150px", 
                            margin: "15px"
                        }}>

                            <img className='product_image' src={productTest.icon} width="100" height="100" alt='prod_image'/>
                            <br/>
                            
                            <p><strong>{productTest.prodName}</strong></p>
                            <p>{productTest.prodDescription}</p>
                            <p>Price: {productTest.price}</p>
                            <button className='button_add' key={productTest.productID}>Add</button >
                            <p></p>
                        </div>
                    )
                })
            }
        </div>
    );
}


