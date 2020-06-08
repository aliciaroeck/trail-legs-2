const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI;
require("dotenv").config();

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log("Mongodb connected...");
}).catch((error) => {
  console.log(error);
});
  
mongoose.connection.on('disconnected', () => {
  console.log("Mongodb disconnected...");
});
  
module.exports = {
  City: require('./City'),
  Trail: require('./Trail'),
  User: require('./User'),
};