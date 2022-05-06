import React , { useState } from 'react';
import './pageCSS/about.css';
import about from "./about.json";

export default function getAbout()
{
    
    return (
        <div style={{ display: "flex", flexDirection: "revert", alignSelf: "revert" }}>
            {
                about.map(about => {
                    return (
                        <div>

                        
                        <div className='about_card' style={{
                            width: "350px", 
                            margin: "15px"
                        }}>

                            <img className='about_image' src={about.image} width="150" height="200" alt='prod_image'/>
                            <div className=''>
                            <div className='about_card_text'>
                            <p>{about.name}</p>
                            <p>{about.role}</p>
                            <p>{about.discription}</p>
                            </div>
                            </div>

                        </div>
                        

                        </div>
                    )
                })
                
            }
            
        </div>
    );
}