/* External Modules */
const express = require("express");
const bodyparser = require("body-parser");
const methodOverride = require("method-override");

/* Internal Modules */
const controllers = require("./controllers");

/* Instanced Modules */
const app = express();

/* Configuration Variables */
const PORT = 4000;

/* App Configuration */
app.set("view engine", "ejs");

/* Middleware */
app.use(bodyparser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(express.static(__dirname+"/public"));

/* Routes */

// root routes
app.get("/", (req,res) => {
    res.render("index");
});

// city routes
app.use("/cities", controllers.city);

// trail routes
app.use("/trails", controllers.trail);

/* Binding Server */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});