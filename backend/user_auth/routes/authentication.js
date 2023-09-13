const jwt = require('jsonwebtoken');
const { jwtSecretKey } = require("../config/dbConfig");
const express = require('express');
const router = express.Router();

/**
 * Middleware for JWT Token Verification
 * 
 * This middleware function is used to verify JSON Web Tokens (JWT) provided
 * in the request headers. It ensures that incoming requests have a valid
 * JWT token, which is typically used for user authentication.
 * 
 * Usage:
 * - Include this middleware before routes that require authentication.
 * - It checks the 'authorization' header for the JWT token.
 * - If a valid token is present, it decodes the token and stores the user ID
 *   in the request object for later use by route handlers.
 * - If no token is present or the token is invalid, it responds with a 401
 *   status (Unauthorized) and an error message.
 * 
 * @param {Object} req - The Express.js request object
 * @param {Object} res - The Express.js response object
 * @param {function} next - The callback to call the next middleware in the stack
 * @returns {void}
 */
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']; // might be "Authorization"

    if (!token) {
        // if auth header is not present
        console.error('auth header not present');
        return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log('')
    jwt.verify(token, jwtSecretKey, (err, decoded) => {
        if (err) {
            // token is invalid
            console.error('invalid jwt token', err);
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Store the decoded user ID in the request object for later use
        req.userId = decoded.userId;
        next();
    });
}

module.exports = { verifyToken };