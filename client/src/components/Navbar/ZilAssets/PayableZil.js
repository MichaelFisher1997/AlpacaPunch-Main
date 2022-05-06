/*/const { Transaction } = require('@zilliqa-js/account');
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const CP = require ('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

// These are set by the core protocol, and may vary per-chain.
// These numbers are JUST AN EXAMPLE. They will NOT WORK on the developer testnet
// or mainnet.
// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid
const CHAIN_ID = 2;
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

// Populate the wallet with an account
const privkey = '2BEE3DD04CEFD25EE17190075C1693F011CA5AAF0C50D3EA2D0934482872AB72';

zilliqa.wallet.addByPrivateKey(
  privkey
);

const address = CP.getAddressFromPrivateKey(privkey);
console.log("Your account address is:");
console.log(`0x${address}`);

async function testBlockchain() {
    // Get Balance
    const balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    console.log(`Your account balance is:`);
    console.log(balance.result)
    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);
    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions
    console.log(`My Gas Price ${myGasPrice.toString()}`)
    console.log('Sufficient Gas Price?');
    console.log(myGasPrice.gte(new BN(minGasPrice.result))); // Checks if your gas price is less than the minimum gas price

    // Send a transaction to the network
    const tx = await zilliqa.blockchain.createTransaction(
      zilliqa.transactions.new({
        version: VERSION,
        toAddr: "zil1eff6xw0czq44wkdf70zru7l3ftp53tp77qt32k",
        amount: new BN(units.toQa("100000", units.Units.Zil)), // Sending an amount in Zil (1) and converting the amount to Qa
        gasPrice: myGasPrice, // Minimum gasPrice veries. Check the `GetMinimumGasPrice` on the blockchain
        gasLimit: Long.fromNumber(1)
      })
    );


    console.log(`The transaction status is:`);
    console.log(tx.receipt);
}

export default testBlockchain;*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



async function testBlockchain() {
  const { Transaction } = require('@zilliqa-js/account');
const { bytes } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
  try {
    const payload =
      '{"version":21823489,"nonce":1012,"toAddr":"4BAF5faDA8e5Db92C3d3242618c5B47133AE003C","amount":"10000000","pubKey":"0246e7178dc8253201101e18fd6f6eb9972451d121fc57aa2a06dd5c111e58dc6a","gasPrice":"1000000000","gasLimit":"50","code":"","data":"","signature":"d91b538341a47e1b58698f2eb78b88f307bbccd4c0d92a8e46f3b559e6f6b99054c1b8eb078f31c75f1202f48a9ef751ff7eafd4b0534b435802645fbe481f5c","priority":false}';
    const tx = JSON.parse(payload);
    const id = await zilliqa.blockchain.createTransactionRaw(payload);

    // process confirm
    console.log(`The transaction id is:`, id);
    console.log(`Waiting transaction be confirmed`);

    // to perform confirmation, we need a `empty` transaction object
    const emptyTx = new Transaction(
      { toAddr: '0x' + tx.toAddr },
      zilliqa.provider,
    );
    const confirmedTxn = await emptyTx.confirm(id);
    console.log(`The transaction status is:`);
    console.log(confirmedTxn.receipt);
  } catch (err) {
    console.log(err);
  }
}

export default testBlockchain;