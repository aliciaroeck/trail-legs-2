const express = require("express");
const router = express.Router();

const db = require("../models");

// route route /cities

// index route
router.get("/", (req,res) => {
    res.send("index");
});

// show route
router.get("/:id", (req,res) => {

});

module.exports = router;