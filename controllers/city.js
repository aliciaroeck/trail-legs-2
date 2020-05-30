const express = require("express");
const router = express.Router();

const db = require("../models");

// route route /cities

// index route
router.get("/", (req,res) => {
    db.City.find({}, (err,allCities) => {
        if(err){
            console.log(err);
            res.send({ message: "Internal Server Error" });
          } else {
            const context = {cities: allCities}
            res.render("cities/index", context);
          }    
    })
});

// show route
router.get("/:id", (req,res) => {
    db.City.findById(req.params.id).populate("trails").exec((err, foundCity) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
        } else {
            const context = {city: foundCity};
            res.render("cities/show", context);
        }
    });
});

module.exports = router;