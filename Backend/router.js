const express = require('express');
const router = express.Router();
const User = require('./user');

router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newuser = new User({
      Name: name,
      Email: email,
      Thoughts: message,
    });

    await newuser.save();

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
});

module.exports = router;
