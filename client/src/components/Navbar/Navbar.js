import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { Connect} from './ZilAssets/zilFunctions.js';
//import walletAddr from './ZilAssets/zilWalletWidget.jsx';

//To make a cart see the following
//https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react




//need to make the values update


const Navbar = () => (
  

  <div className={'navbar'}>
    <div className="nav-section">
      <img src="./logo-title.png" alt="logo" />
    </div>
    <div className="nav-links">
      <button className="aboutButton"><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></button>
      <button className="aboutButton"><Link to="/shipping" style={{ textDecoration: 'none' }}>Shipping</Link></button>
      <button className="aboutButton"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></button>
      <button className="aboutButton"><Link to="/Products" style={{ textDecoration: 'none' }}>Products</Link></button>
      </div>
      <div class="nav-right">
        <div class="nav-wallet" >
          <button class="connect-wallet-btn" type="button" onClick={Connect} data-hover="Connect">
            <span class="connect-wallet-btn-hover" >Wallet</span>
          </button>
        </div>
      </div>
    </div>
    
    
    
  
);

//https://dev.zilliqa.com/docs/apis/api-account-get-balance


export default Navbar;
