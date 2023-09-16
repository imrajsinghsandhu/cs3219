const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool, jwtSecretKey } = require("../config/dbConfig");
const { verifyToken } = require("./authentication");
const router = express.Router();

/**
 * For users to get their profile.
 * 1. Verifies the user's authentication token
 * 2. Returns their profile information
 */
// Apply the middleware to the /api/profile route
router.get('/is-token-valid', verifyToken, (req, res) => {
    // if it comes here, then the token is valid
    res.status(200).json({ message: 'User is valid!'});
});

// done on FE
/**
 * For users to logout
 * 1. Clears the session or token on the server-side to log the user out
 */
router.get('/logout', async (req, res) => {
    try {
        // Redirect the user to the login page (replace '/login' with your actual login page URL)
        res.status(200).json({ message: 'Logged out successfully'});
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Logout failed' });
    }
});

// Tested, works without jwt, but must enforce GET profile request on FE
/**
 * Update User Profile
 * 
 * This route allows users to update their profile information, such as changing
 * their password or updating their email address. It requires authentication
 * using a valid JWT token.
 * 
 * Usage:
 * - Include the 'verifyToken' middleware before this route to ensure authentication.
 * - The user ID is available in 'req.userId' after authentication.
 * - Validate and update user profile data in the database.
 * - Respond with success or error messages as appropriate.
 * 
 * @param {Object} req - The Express.js request object
 * @param {Object} res - The Express.js response object
 * @returns {void}
 */
router.put('/profile', verifyToken, async (req, res) => {
    try {

        const userId = req.userId;

        // Extract the new email from the request body
        const { email } = req.body;

        if (!email) {
            res.status(500).json({ message: "Missing email field"});
        }

        // Validate the new email (you can add more validation here)
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Check if the new email is already in use by another user (pseudo-code)
        const isEmailInUse = await isEmailAlreadyInUse(email);
        if (isEmailInUse) {
            return res.status(409).json({ message: 'Email is already in use' });
        }

        // Update the user's email in the database
        await pool.query('UPDATE users SET email = $1 WHERE id = $2', [email, userId]);
        
        // Respond with a success message
        res.status(200).json({ message: 'Email updated successfully' });
    } catch (error) {
        console.error('Error while updating email:', error);
        res.status(500).json({ message: 'Email update failed' });
    }
});

// Helper function to validate email format
const isValidEmail = (email) => {
    // You can implement your own email validation logic here
    // For simplicity, this example checks for a basic email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const isEmailAlreadyInUse = async (email) => {
    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (existingUser.rows.length > 0) {
        console.log('Email already in use, are you sure this email is yours?');
        return true;
    } else {
        // email not in use
        return false;
    }
}

// Tested
/**
 * For users to sign in 
 * 1. Validates user input
 * 2. Compares the hashed password 
 * 3. Generates an authentication token (e.g., JWT) if login is successful
 */
router.post('/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Check if the user exists in the database
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            console.log("User does not exist in the database");
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the hashed password from the database with the provided password
        const hashedPassword = user.rows[0].password;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        if (!passwordMatch) {
            console.log("Incorrect password!");
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // If the email and password are correct, generate a JWT token
        const userId = user.rows[0].id;
        const token = jwt.sign({ userId }, jwtSecretKey, { expiresIn: '1h' });

        // Set the token in the browser cookie
        res.cookie("token", token, {
            httpOnly:true
        });

        // Send the token to the frontend
        res.status(200).json({token: token});
        console.log("Sent token");
        // redirecting to the questions page...should this be handled by the FE instead?
        // return res.redirect("http://localhost:3000/questions");
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ message: 'Sign-in failed' });
    }
});

// Tested
// Need redo regex for email, xx@example..com passed lol
/**
 * For users to register.
 * 1. Validates user input 
 * 2. Hashes the password 
 * 3. Creates a new user record in the database 
 * 4. Returns a success message or token
 */
router.post('/sign-up', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (existingUser.rows.length > 0) {
            console.log('User already registered');
            res.status(400).json({ message: 'User already exists' });
        }

        // Check validity of email
        if (!isValidEmail(email)) {
            console.log("Invalid email format");
            res.status(400).json({ message: 'Invalid email format' });
        }

        // Hash the password before saving it
        const saltRounds = 10; // number of salt rounds, more the better, but also degrades performance
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the new user into the database
        await pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword]);

        // redirect user to login page after successfully registering their email and password
        res
        .status(201)
        .json({ 
            message: 'User registered successfully! Redirecting to sign in page',
        });
        console.log("User registered successfully! Redirecting to sign in page");
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Registration failed' });
    }
});

// Postman test failed, works without the verify middleware
/**
 * 1. Validates the user's identity
 * 2. Deletes their account data from the database
 * 3. Logs them out
 */
router.delete('/delete-account', verifyToken, async (req, res) => {
    try {
        // Assuming you have the user's ID available in the request
        // const userId = req.userId;
        // Extract the user ID from the JWT token
        const userId = req.userId;
        
        // Delete the user's account data from the database
        await pool.query('DELETE FROM users WHERE id = $1', [userId]);

        // Log the user out by clearing the JWT token (assuming you're using JWT for authentication)
        // You can use a library like js-cookie for this
        // Example: Cookies.remove('your-jwt-cookie-name');.... this will be on your FE

        res.status(200).json({ message: 'Account deleted successfully'});
    } catch (error) {
        console.error('Error during account deletion:', error);
        res.status(500).json({ message: 'Account deletion failed' });
    }
});

module.exports = router;