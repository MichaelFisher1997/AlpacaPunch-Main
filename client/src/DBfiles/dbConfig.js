const mysql = require('mysql');
const { Client } = require('ssh2');
const sshClient = new Client();
//forces react to require mariadb connection
 
// Create a connection pool
const connection = mysql.createConnection({
    host: '139.162.192.227',
    database: 'AlpacaData',
    port: '3306',
    user: 'remoteAlpaca', 
    password: 'Alpaca123',
  });
 
  /*connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });*/

connection.query('SELECT * FROM customers', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
  connection.end();
  });


  




// Expose a method to establish connection with MariaDB SkySQL
/*module.exports = Object.freeze({
  pool: pool
})*/