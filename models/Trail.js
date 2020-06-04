// Internal Module
const mongoose = require('mongoose');

// Schema
const trailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    difficulty: {type: String, required: true},
    image: {type: String, required: true},
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Model
const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;