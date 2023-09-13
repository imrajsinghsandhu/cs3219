const express = require('express');
const cors = require('cors');
const app = express();
const users = require('./routes/users');


// CORS policy
app.use(cors());

// Routes
app.use(express.json());
app.use('/api/users', users);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});