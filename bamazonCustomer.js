// Require Modules
var mysql = require('mysql');
var Table = require('easy-table');
var inquirer = require('inquirer');


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
            t.newRow();
        });
        // Console log table
        console.log('\n' + t.toString());
        whatDoYouWant();
    });
};

function whatDoYouWant() {
    
        inquirer.prompt([
            {
                type: 'input',
                name: 'item',
                message: 'Enter the item ID of desired product.',
                filter: Number
            },
            {
                type: 'input',
                name: 'quantity',
                message: 'How many would you like to purchase?',
                filter: Number
            },

        ]).then(function(answers){
            var iAnswer = answers.item;
            var qAnswer = answers.quantity;
            processOrder(iAnswer, qAnswer);
            
        });
    }

function processOrder(iSelection, qSelection) {
    connection.query('SELECT * FROM products WHERE item_id = ' + iSelection, function(err, res){
        if (err) throw err;
        if (qSelection <= res[0].stock_quantity) {

            // Notify customer that order is ready
            var total = res[0].price * qSelection;
            console.log('\nTHANK YOU! Your order has been placed!');
            console.log('\nYour ' + res[0].product_name + ' will ship once payment of $' + total.toFixed(2) + ' is recieved');
            // Send query to database updating inventory.
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + qSelection + ' WHERE item_id = ' + iSelection);
        } else {
            console.log('\nUnfortunately, we do not currently have enough ' + res[0].product_name + 'in stock to fulfill your order.')
        };
        showInventory();
    })
}
    
    
    
