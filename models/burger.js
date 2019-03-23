const orm = require("../config/orm.js");

const burger = {
    create : function (sandwich,callback) {
        orm.insertOne(sandwich,function(results) {
            callback(results);
        })
    },
    findAll : function(obj,callback) {
        orm.selectAll(function(result) {
            callback(result);
        })
    },
    update : function(sandwich,id,callback) {
        orm.updateOne(sandwich,id,function(result) {
            callback(result);
        })
    }
}

module.exports= burger;