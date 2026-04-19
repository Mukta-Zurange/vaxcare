const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// server.js  — change this one line:
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vaccineDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/booking', require('./routes/booking'));

app.listen(5000, () => console.log("Server running on port 5000"));