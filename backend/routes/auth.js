const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'your_super_secure_random_string!@#123'; // Replace with a secure key

// Registration Route
router.post('/register', async (req, res) => {
  const { name, email, phone, password, preferences, address } = req.body;

  try {

    //validate phone number length{ \d:only digits allowed, {10}:must be exactly 10 char, ^ $ : ensures length is exact}
    if(!/^\d{10}$/.test(phone)) {
      return res.status(400).json({message: 'Phone number must be exactly 10 digits.'});
    } 

    //check if user already exists
    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists) return res.status(400).json({ message: 'Email or Phone Number already exists' });

    //save new user
    const newUser = new User({ name, email, phone, password, preferences, address });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, phone, password } = req.body;

  try {

    //validate phone number length provided
    if (emailOrPhone && !/^\d{10}$/.test(emailOrPhone)) {
      return res.status(400).json({ message: 'Phone number must be exactly 10 digits.' });
    }

    //find user by email or phone
    const user = await User.findOne({ $or: [{ email: emailOrPhone }, { phone: emailOrPhone }] });
    if (!user) return res.status(400).json({ message: 'Invalid email/phone or password' });

    //validate password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email/phone or password' });

    //generate jwt token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch User Profile
router.get('/profile', async (req, res) => {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
