const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    trails: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Trail' 
      }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
