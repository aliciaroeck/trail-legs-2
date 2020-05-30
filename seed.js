const db = require("./models");

const portland = {
    name: "Portland",
    state: "Oregon"
};

db.City.create(portland, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const seattle = {
    name: "Seattle",
    state: "Washington"
};

db.City.create(seattle, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const asheville = {
    name: "Asheville",
    state: "North Carolina"
};

db.City.create(asheville, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const denver = {
    name: "Denver",
    state: "Colorado"
};

db.City.create(denver, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const flagstaff = {
    name: "Flagstaff",
    state: "Arizona"
};

db.City.create(flagstaff, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const saltLakeCity = {
    name: "Salt Lake City",
    state: "Utah"
};

db.City.create(saltLakeCity, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const boise = {
    name: "Boise",
    state: "Idaho"
};

db.City.create(boise, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});

const sedona = {
    name: "Sedona",
    state: "Arizona"
};

db.City.create(sedona, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});