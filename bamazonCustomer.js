let mysql = require("mysql");
let inquirer = require("inquirer");

var data = [];
var product = 0;
var quant = 0;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "swobodaio18",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("connected as id " + connection.threadId + "\n");

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        data = res;

        parseDatabase(data);
        itemSelect();
    });
});


function parseDatabase(params) {

    const header_string = "|item_id| product\t\t| category\t\t| price | \n|------\t|-------i\t\t|-------\t\t|-------|"
    console.log(header_string);

    for (let index = 0; index < params.length; index++) {
        let prod = params[index];
        let product_string = `| ${prod.item_id}\t| ${prod.product_name}\t| ${prod.department_name}\t| ${prod.price}\t|`
        console.log(product_string);
    }
    console.log("\n");

}

function itemSelect(params) {
    inquirer
        .prompt([{
            name: "prodID",
            type: "input",
            message: "Which item would you like to purchase?",
            validate: function(input) {
                if (!isNaN(parseInt(input)) && parseInt(input) < data.length) {
                    return true;
                } else {
                    return "Please input a number"
                }
            }
        }, {
            name: "units",
            type: "input",
            message: "How many units?",
            validate: function(input) {
                if (!isNaN(parseInt(input))) {
                    return true;
                } else {
                    return "Please input a number"
                }
            }

        }])
        .then(function(answer) {
            product = parseInt(answer.prodID);
            quant = parseInt(answer.units);

            if (quant < data[product].stock_quantity) {
                var query = connection.query(
                    "UPDATE products SET ? WHERE ?", [{
                            stock_quantity: quant
                        },
                        {
                            item_id: product
                        }
                    ],
                    function(err, res) {
                        if (err) throw err;
                    }
                );
                console.log("Item Ordered. Your total is: $" + data[product].price * quant + "\n");
            } else {
                console.log("Sorry, insufficient quantity!\n");
            }
            inquirer.prompt([{
                    name: "orderAgain",
                    type: "confirm",
                    message: "Order a new item?"
                }

            ]).then(function(answer) {

                if (answer.orderAgain) {
                    itemSelect();
                } else {
                    connection.end()
                    return true;
                }
            })
        });
}