const connection = require("./connection.js");

const orm = {
    selectAll : function(callback) {
        connection.query("SELECT * FROM burgers",function(error,results) {
            if (error) {
                return callback(error);
            }
            callback(results);
        })
    }, 
    insertOne : function(burger, callback) {
        connection.query("INSERT into burgers (burger_name) VALUES (?)",[burger.burger_name],function(error,results) {
            if (error) {
                return callback(error);
            }
            callback(results);
        })
    }, 
    updateOne : function(burger,id,callback) {
        const query = `UPDATE burgers SET devoured = ?, eaten = ${burger.eaten}
        WHERE id = ?`;
        console.log(query);
        connection.query(query,[burger.devoured,id],function(error,results) {
            if (error) {
                return callback(error);
            }
            callback(results);
        })
    }
}

module.exports = orm;