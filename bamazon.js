// Require Modules
var mysql = require('mysql');



// Establish Connection to Server and Target 'bamazon' Database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'docker',
    database: 'bamazon'
});

// 