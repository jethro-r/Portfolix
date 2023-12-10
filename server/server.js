const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require("dotenv").config();
const app = express();
const portfolioRoutes = require("./routes/portfolio.route");
const PortfolioModel = require('./models/portfolio.model');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.mongoURI;

mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  emailAddress: String,
  password: String,
});

const User = mongoose.model('User', userSchema, 'User');

app.get("/api/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
})
// user register
app.post('/api/register', async (req, res) => {
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
});

// user login
app.post('/api/login', async (req, res) => {
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
});

app.use("/api/portfolio", portfolioRoutes)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});