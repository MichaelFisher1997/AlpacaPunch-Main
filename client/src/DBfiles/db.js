const mysql = require('mysql2');
const { Client } = require('ssh2');
// create an instance of SSH Client
const sshClient = new Client();

// define connection config for the database
const dbServer = {
    host: '139.162.192.227',
    port: '3306',
    user: 'remoteAlpaca',
    password: 'Alpaca123',
    database: 'AlpacaData'
};

// define connection config for the ssh tunnel
const tunnelConfig = {
    host: '139.162.192.227',
    port: 22,
    username: 'root',
    password: 'Alpaca123'
};

const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 3306,
    dstHost: dbServer.host,
    dstPort: dbServer.port
};

const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
        sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
             if (err) reject(err);
             // create a new DB server object including stream
             const updatedDbServer = {
                 ...dbServer,
                 stream
            };
            // connect to mysql
            const connection =  mysql.createConnection(updatedDbServer);
            // check for successful connection
            //  resolve or reject the Promise accordingly  
            connection.connect((error) => {
            if (error) {
                reject(error);
            }
            resolve(connection);
            });
});
}).connect(tunnelConfig);});

//gets the products in our database to display them on screen
function getProducts()   {
    let queryStr = "SELECT * FROM products";

    return SSHConnection.then(
        function(connection)    {
            return new Promise((resolve, reject) => {
                connection.query(
                    queryStr,
                    function(err, results, fields)  {
                        if(err) reject(err)
                        resolve(results)
                    }
                )
            })
        },
        function(error)   {
            console.log(error);
        }
    )
}
function getOrders()    {
    let queryStr = "SELECT * FROM orders";

    return SSHConnection.then(
        function(connection)    {
            return new Promise((resolve, reject) => {
                connection.query(
                    queryStr,
                    function(err, results, fields)  {
                        if(err) reject(err)
                        resolve(results)
                    }
                )
            })
        },
        function(error)   {
            console.log(error);
        }
    )
}

function getOrderLines()    {
    let queryStr = "SELECT * FROM order_lines";

    return SSHConnection.then(
        function(connection)    {
            return new Promise((resolve, reject) => {
                connection.query(
                    queryStr,
                    function(err, results, fields)  {
                        if(err) reject(err)
                        resolve(results)
                    }
                )
            })
        },
        function(error)   {
            console.log(error);
        }
    )
}

function getCustomers()    {
    let queryStr = "SELECT * FROM customers";

    return SSHConnection.then(
        function(connection)    {
            return new Promise((resolve, reject) => {
                connection.query(
                    queryStr,
                    function(err, results, fields)  {
                        if(err) reject(err)
                        resolve(results)
                    }
                )
            })
        },
        function(error)   {
            console.log(error);
        }
    )
}

//enables file writing from node
const fs = require('fs');

//Writes all information needed to json files within the dbFiles directory
(async function() {
    let orders = await getOrders();
    let products = await getProducts();
    let order_lines = await getOrderLines();
    let customers = await getCustomers();
            
    fs.writeFile('./jsonFiles/Orders.json', JSON.stringify(orders), function(err) {
        if(err) throw(err);
        console.log("File created");
    })
    fs.writeFile('./jsonFiles/Products.json', JSON.stringify(products), function(err) {
        if(err) throw(err);
        console.log("File created");
    })
    fs.writeFile('./jsonFiles/Order_Line.json', JSON.stringify(order_lines), function(err) {
        if(err) throw(err);
        console.log("File created");
    })
    fs.writeFile('./jsonFiles/Customers.json', JSON.stringify(customers), function(err) {
        if(err) throw(err);
        console.log("File created");
    })
})();