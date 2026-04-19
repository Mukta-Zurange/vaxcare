const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Save booking
router.post('/book', async (req, res) => {
    const { userId, vaccine, center, date, time } = req.body;

    const booking = new Booking({
        userId,
        vaccine,
        center,
        date,
        time
    });

    await booking.save();
    res.json({ message: "Booking saved" });
});

// Get all bookings
router.get('/all', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

module.exports = router;