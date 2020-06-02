// Internal Module
const mongoose = require('mongoose');

// Schema
const trailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    /* Image: {type: String, required: true}, */
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
});
// Model
const Trail = mongoose.model('Trail', trailSchema);


module.exports = Trail;