const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../models");

// register route
router.get("/register", (req,res) => {
    res.render("auth/register");
});

// register post route
router.post("/register", async (req,res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email});
        if(foundUser) {
            return res.send({message: "Account already registered"});
        } 
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const newUser = await db.User.create(req.body);
        res.redirect("/login");
        console.log(newUser);
    } catch (err) {
        console.log(err);
        res.send({err});
    }
});

// login route
router.get("/login", (req,res) => {
    res.render("auth/login");
});

// login post route
router.post("/login", async (req,res) => {
    try {
        const foundUser = await db.User.findOne({email: req.body.email});
        if(!foundUser) {
            return res.send({message: "Password or Email is Incorrect"});
        }
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            return res.send({message: "Password or Email is Incorrect"});
        }
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        }
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.send({message: "Internal Server Error"});
    }
});


module.exports = router;