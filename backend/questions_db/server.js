const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const questions = require('./routes/questions');

const port = process.env.PORT || 5000;

app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/question_bank");

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());
app.use('/api/questions/', questions)

app.listen(port, () => {
    console.log('listening on port 5000');
})