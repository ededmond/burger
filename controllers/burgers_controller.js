const express = require("express");
const Burger = require("../models/burger.js");

const router = express.Router();

router.get("/",function(req,res) {
    Burger.findAll({},function(result) {
        for (let i = 0 ; i < result.length; i++) {
            result[i].beenEaten = result[i].eaten > 0;
        }
        res.render("index", {
            burger: result
        })
    })
});

router.post("/api/burgers",function(req,res) {
    Burger.create(req.body,function(result) {
        res.json(result);
    })
})

router.put("/api/burgers/:id",function(req,res) {
    const id = req.params.id;
    console.log(req.body);
    let update = {};
    if (req.body.eating === 'true') {
        update.devoured = true;
        update.eaten = "eaten + 1";
    } else {
        update.devoured = false;
        update.eaten = "eaten";
    }
    Burger.update(update,id,function(result) {
        console.log(result);
        res.json(result);
    })
})


module.exports = router;