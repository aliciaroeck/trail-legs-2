const express = require("express");
const router = express.Router();

const db = require("../models");

// route route /trails

// index route
router.get("/", (req,res) => {
    res.send("index");
});

// new route
router.get("/new", (req,res) => {
    res.send("new");
});

// create route
router.post("/", (req,res) => {

});

// show route
router.get("/:id", (req,res) => {

});

// edit (view) route
router.get("/:id")

// update route

// delete route

module.exports = router;