const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: String,
    vaccine: String,
    center: String,
    date: String,
    time: String
});

module.exports = mongoose.model('Booking', BookingSchema);