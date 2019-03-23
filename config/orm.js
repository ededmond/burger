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
        connection.query(`UPDATE burgers SET devoured = ?, eaten = ?
                        WHERE id = ?`,[burger.devoured,burger.eaten,id],function(error,results) {
            if (error) {
                return callback(error);
            }
            callback(results);
        })
    }
}

module.exports = orm;