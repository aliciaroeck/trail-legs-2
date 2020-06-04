const express = require("express");
const router = express.Router();

const db = require("../models");

// route route /trails

// new route
router.get("/:cityid/new", (req,res) => {
/*     if(!req.session.currentUser){
        res.redirect("/login");
    } */
    db.City.findById(req.params.cityid, (err, foundCity) => {
        const context = {city: foundCity}
        res.render("trails/new", context);
    })
});

// create route
router.post("/:cityid", (req,res) => {
    const newTrail = {
        city: req.params.cityid,
        name: req.body.name,
        location: req.body.location,
        difficulty: req.body.difficulty,
        description: req.body.description,
        image: req.body.image,
        user: req.session.currentUser.id
    }
    db.Trail.create(newTrail, (err, createdTrail) => {
      if(err){
          console.log(err);
          return res.send({message: "Internal Server Error"});
        } else {
            db.City.findById(req.params.cityid, (err, foundCity) => {
                if(err){
                    console.log(err);
                    return res.send({message: "Internal Server Error"});
            } else {
                foundCity.trails.push(createdTrail);
                foundCity.save();
                }
                db.User.findById(req.session.currentUser.id, (err, foundUser) => {
                    if(err) {
                    console.log(err);
                    return res.send({message: "Internal Server Error"});
                    } else {
                        foundUser.trails.push(createdTrail);
                        foundUser.save();
                        res.redirect(`/trails/${createdTrail._id}`);
                    }
                })
            });
        }
    });
});

// show route
router.get("/:id", (req,res) => {
    db.Trail.findById(req.params.id).populate("city user").exec((err, foundTrail) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
      } else {
        const context = {trail: foundTrail, currentUser:req.session.currentUser.id}
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
            if(foundTrail.user.toString() !== req.session.currentUser.id){
                return res.send("You are not authorized!");
            }
            db.City.findById(foundTrail.city, (err, foundCity) => {
                if(err){
                    console.log(err);
                    res.send({message: "Internal Server Error"});
                } else {
                    foundTrail.city = foundCity;
                    const context = {trail: foundTrail, currentUser: req.session.currentUser.id}
                    res.render("trails/edit", context);
                }
            })
        }
    });
});

// update route
router.put("/:id", (req,res) => {
    db.Trail.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTrail) => {
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
        } else {
            res.redirect(`/trails/${updatedTrail._id}`);
        }
    });
});

// delete route
router.delete("/:id", (req,res) => {
    db.Trail.findByIdAndDelete(req.params.id, (err, deletedTrail)=>{
        if(err){
            console.log(err);
            res.send({message: "Internal Server Error"});
        } else {
            db.City.findById(deletedTrail.city, (err, foundCity) => {
                if(err){
                    console.log(err);
                    res.send({message: "Internal Server Error"});
                } else {
                    foundCity.trails.remove(deletedTrail);
                    foundCity.save();
                }  
                db.User.findById(req.session.currentUser.id, (err, foundUser) => {
                    if(err){
                        console.log(err);
                        res.send({message: "Internal Server Error"});
                    } else {
                        foundUser.trails.remove(deletedTrail);
                        foundUser.save();
                        res.redirect(`/cities/${foundCity._id}`)
                    }
                })  
            });
        }  
    });
});


module.exports = router;