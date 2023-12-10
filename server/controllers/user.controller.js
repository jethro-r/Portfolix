const bcrypt = require('bcrypt');
const User = require('../models/user.model');


exports.registerUser = async (req, res) => {
 try {
   const { firstName, lastName, username, emailAddress, password } = req.body;


   if (!password || typeof password !== 'string') {
     return res.status(400).json({ message: 'Invalid password' });
   }


   const existingUser = await User.findOne({ username });
   if (existingUser) {
     return res.status(400).json({ message: 'Username already exists' });
   }


   const hashedPassword = await bcrypt.hash(password, 10);


   // new user
   const newUser = new User({ firstName, lastName, username, emailAddress, password: hashedPassword });
   await newUser.save();


   res.status(201).json({ message: 'User created successfully' });
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Server error' });
 }
};


exports.loginUser = async (req, res) => {
 try {
   const { username, password } = req.body;


   const user = await User.findOne({ username });


   if (!user) {
     return res.status(404).json({ message: 'User not found' });
   }


   const passwordMatch = await bcrypt.compare(password, user.password);


   if (passwordMatch) {
     return res.status(200).json({ message: 'Login successful' });
   } else {
     return res.status(401).json({ message: 'Invalid credentials' });
   }
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: 'Server error' });
 }
};
