

//zil1eff6xw0czq44wkdf70zru7l3ftp53tp77qt32k

//grabs blockchain
 const blockchain = () => window.zilPay.blockchain;

 const zil = 0.063;


 //GBP to zil converter
 function convert(GBP){
   let con = zil*GBP
    return{
      con
    }
 }

 
 /*const status = await connect();
 status === window.zilPay.wallet.isConnect;*/
 


  //Connect
  const Connect = () => {
    window.zilPay.wallet.connect().then(function(retVal){
      console.log(retVal)
      if(retVal){console.log(window.zilPay.wallet.defaultAccount.bech32)}
      
     })
  }

 

  
 



  


  


  


    export {Connect, blockchain};

    //zilliqa, privateKey, bytes, units, recipientAddress, sendingAmount are defined in the codebase before

