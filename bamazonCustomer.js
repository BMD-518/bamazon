// Require Modules
var mysql = require('mysql');
var Table = require('easy-table');



// Establish Connection to Server and Target 'bamazon' Database
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'docker',
    database: 'bamazon'
});

// 
connection.connect(function(err) {
    if(err) throw err;
    showInventory();
});


function showInventory() {
    // create sql query to pull database table info
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res){
        if (err) throw err;
        // Create table with easy-table
        var t = new Table;
        // Select key values to display in table
        res.forEach(function (product){
            t.cell('Item ID', product.item_id);
            t.cell('Product Name', product.product_name);
            t.cell('Price', product.price);
            t.newRow()
        })
        // Console log table
        console.log(t.toString())
    })
};

