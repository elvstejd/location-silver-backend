const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    long: Number,
    lat: Number
});

const listingSchema = mongoose.Schema({
    address: String,
    imageUrl: String,
    sector: String,
    price: Number,
    location: locationSchema
});

module.exports = mongoose.model('Listing', listingSchema);
