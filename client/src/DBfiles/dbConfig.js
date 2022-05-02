var mariadb = require('mariadb');
//forces react to require mariadb connection
 
// Create a connection pool
var pool = 
  mariadb.createPool({
    host: '139.162.192.227',
    port: 3306,
    user: 'root', 
    password: 'Alpaca123',
    database: 'AlpacaData'
  });
 
  pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
// Expose a method to establish connection with MariaDB SkySQL
/*module.exports = Object.freeze({
  pool: pool
})*/