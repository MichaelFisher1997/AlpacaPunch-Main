


//zil1eff6xw0czq44wkdf70zru7l3ftp53tp77qt32k

//grabs blockchain
 const blockchain = () => window.zilPay.blockchain;

 
 /*const status = await connect();
 status === window.zilPay.wallet.isConnect;*/
 


  //Connect
  const Connect = () => {
    window.zilPay.wallet.connect().then(function(retVal){
      console.log(retVal)
      if(retVal){console.log(window.zilPay.wallet.defaultAccount.bech32)}
      
     })
  }

  
  /*const Payable = () => {
      const zilliqa = window.zilPay;
      const utils = zilPay.utils;
      
      const amount = utils.units.toQa(10, utils.units.Units.Zil); // 10 zil
      const gasPrice = utils.units.toQa('1000', utils.units.Units.Li);
      const txParams = zilliqa.transactions.new({ // Create params for our trasnaction.
        toAddr: 'zil1wl38cwww2u3g8wzgutxlxtxwwc0rf7jf27zace',
        amount: amount,
        gasPrice: gasPrice
      });
      try {
          const txResult = await zilliqa.blockchain.createTransaction(txParams);
      } catch (err) {
          // if user rejected this transaction or other problem.
      }

  }*/


  


  


    export {Connect, blockchain};

    //zilliqa, privateKey, bytes, units, recipientAddress, sendingAmount are defined in the codebase before

