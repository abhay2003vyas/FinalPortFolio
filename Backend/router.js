const express = require('express');
const router = express.Router();
const User = require('./user');
const app=express();
app.use(express.json());
router.post('/submit', async (req, res) => {
  console.log(req.body);
  const { name,email,message} = req.body;
  const newuser=new User({Name:name,Email:email,Thoughts:message
  })
  await newuser.save();
  res.status(400).json({message:'Done'});
});

module.exports = router;