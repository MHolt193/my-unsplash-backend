const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    label:{
        type: String,
        required: [true, 'Plase add a label']
    }, 
    imageUrl: {
        type: String,
        required: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Image', imageSchema)