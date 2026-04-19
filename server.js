const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/vaccineDB')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use('/api/booking', require('./routes/booking'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});