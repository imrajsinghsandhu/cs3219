const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/");

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to db'));

app.listen(port, () => {
    console.log('listening on port 5000');
})