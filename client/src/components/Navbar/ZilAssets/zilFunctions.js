import { React, useState } from "react";

//zil1eff6xw0czq44wkdf70zru7l3ftp53tp77qt32k

//grabs blockchain
 const blockchain = () => window.zilPay.blockchain;

 

 


  //Connect
  const Connect = () => {
    window.zilPay.wallet.connect().then(function(retVal){
      console.log(retVal)
      if(retVal){console.log(window.zilPay.wallet.defaultAccount.bech32)}
      
     })
  }

  

  //current account address

  const checkConnection = () => {
    const isConnect = window.zilPay.wallet.isConnect;
    
  if (isConnect) {
    
  } else {
    console.log("Not connected!!")
  }

  }



  


  //grabs balance
  /*const balance = window.zilPay.blockchain.getBalance(publicKey).then(function(resp){
    console.log(resp);
   })*/
  


    export {Connect, blockchain};