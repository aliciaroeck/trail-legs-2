const express = require("express");
const router = express.Router();

const db = require("../models");

// route route /trails

// new route
router.get("/:cityid/new", (req,res) => {
    db.City.findById(req.params.cityid, (err, foundCity) => {
        const context = {city: foundCity}
        res.render("trails/new", context);
    })
});

// create route
router.post("/:cityid", (req,res) => {
    db.Trail.create(req.body, (err, createdTrail) => {
      if(err){
          console.log(err);
          res.send({message: "Internal Server Error"});
      } else {
          db.City.findById(req.params.cityid, (err, foundCity) => {
            if(err){
                console.log(err);
                res.send({message: "Internal Server Error"});
          } else {
              foundCity.trails.push(createdTrail);
              foundCity.save();
              res.redirect(`/trails/${createdTrail._id}`);
          }
        });
      }
    });
});

// show route
router.get("/:id", (req,res) => {
    db.Trail.findById(req.params.id, (err, foundTrail) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
      } else {
        const context = {trail: foundTrail}
        res.render("trails/show", context);
      }     
    });
});

// edit (view) route
router.get("/:id/edit", (req,res) => {
    db.Trail.findById(req.params.id, (err, foundTrail) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
        } else {
            const context = {trail: foundTrail}
            res.render("trails/edit", context);
        }
    });
});

// update route
/* router.put("/:id", (req,res) => {
    db.Trail.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTrail) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
        } else {
            res.redirect(`/trails/${updatedTrail._id}`);
        }
    });
}); */

// delete route

module.exports = router;