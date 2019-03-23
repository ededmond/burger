// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
const mysql = require("mysql");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

// Set up our connection information
var connection 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(config);
}
 

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

// Export connection
module.exports = connection;
