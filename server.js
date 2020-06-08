/* External Modules */
const express = require("express");
const bodyparser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const db = require("./models");

/* Internal Modules */
const controllers = require("./controllers");

/* Instanced Modules */
const app = express();

/* Configuration Variables */
const PORT = process.env.PORT || 4000;

/* App Configuration */
app.set("view engine", "ejs");

/* Middleware */
app.use(bodyparser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    // store session info into db
    store: new MongoStore({
      url: process.env.MONGODB_URI || "mongodb://localhost:27017/trail-legs",
    }),
    secret: process.env.SECRET_KEY || "dallas nashville",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  })
);

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));


const authRequired = function (req, res, next) {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }
  next();
};

/* Routes */
// root routes
app.get("/", (req,res) => {
    db.City.find({}, (err, allCities) => {
        if(err){
            console.log(err);
            return res.send({message: "Internal Server Error"});
          } else {
            const context = 
            {cities: allCities,
            user: req.session.currentUser};
            res.render("index", context);
          }
    });
});

// auth route
app.use("/", controllers.auth);

// city routes
app.use("/cities", controllers.city);

// trail routes
app.use("/trails", authRequired, controllers.trail);

/* Binding Server */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});