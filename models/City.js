// Internal Module
const mongoose = require('mongoose');

// Schema
const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    Trail: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Trail' 
      }]
});

// Model
const City = mongoose.model('City', citySchema);


modules.exports = City;