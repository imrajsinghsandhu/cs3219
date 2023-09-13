require('dotenv').config();

const { Pool } = require('pg');
const jwtSecretKey = process.env.JWT_SECRET_KEY;

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DB_DATABASE : connectionString
});

module.exports = { pool, jwtSecretKey };