import React from 'react';
import './Footer.css';
import ZilLogo from './zilliqa.png';
import ZilpayLogo from './zilpay.png';

const Footer = () => (
    <footer className="footer">
        <div class="footer__copyright"> All rights reserved</div>
        <di class="footer-center">
            <img src={ZilLogo} alt="ZilLogo"/>
            <img src={ZilpayLogo} alt="Zilpaylogo"/>
        </di>
    </footer>
  );
  
  
  
  
  export default Footer;