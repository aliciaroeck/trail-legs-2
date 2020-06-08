const db = require("./models");

const portland = {
    name: "Portland",
    state: "Oregon",
    image: "/cities/Portland.jpg",
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
    state: "Washington",
    image: "/cities/Seattle.jpg",
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
    state: "North Carolina",
    image: "/cities/Asheville.jpg",
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
    state: "Colorado",
    image: "/cities/Denver.png",
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
    state: "Arizona",
    image: "/cities/Flagstaff.png",
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
    state: "Utah",
    image: "/cities/Salt.jpg",
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
    state: "Idaho",
    image: "/cities/Boise.jpg",
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
    state: "Arizona",
    image: "/cities/Sedona.jpg",
};

db.City.create(sedona, (error, createdCity) => {
    if(error){
        console.log(error.errmsg);
    } else {
        console.log(createdCity);
    }
});