import {React, useState } from "react";
import { Connect } from "./zilFunctions";
import Zil from '../zil-pay-logo.png';

const walletAddr = () => {
    const [addr, setAddr] = useState("xxxxxxxxxx");
      if (Connect){
        setAddr(window.zilPay.wallet.defaultAccount.bech32)
      }
      if (!Connect){
        setAddr("xxxxxxxxxxx")
      }

      return(
        
        <>
        <div className="walletinfo">
        <p>Address: {addr}</p>
        <p>ZillBallance: </p>
        </div>

        <div className="nav-end">
        <input clasName="ZilPayConnect" type="image" src={Zil} onClick={Connect} alt="ZilPay-Connect"/>
        
        </div>
        </>
      );
    }


  export default walletAddr;
/*
  <div className="walletinfo">
            <p>Address: </p>
            <p>ZillBallance: </p>
        </div>
        
    
         <div className="nav-end">
      
        <input clasName="ZilPayConnect" type="image" src={Zil} onClick={Connect} alt="ZilPay-Connect"/>
        <div/>
        
*/