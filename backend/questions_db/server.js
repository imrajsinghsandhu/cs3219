const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to db'));

// let our routes accept JSON body
app.use(express.json());

const questionsRouter = require('./routes/questions');
app.use('/api/questions/', questionsRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})