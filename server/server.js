const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
require("dotenv").config();
const app = express();
const portfolioRoutes = require("./routes/portfolio.route");
const PortfolioModel = require('./models/portfolio.model');
const UserModel = require('./models/user.model');
const { registerUser, loginUser } = require('./controllers/user.controller');

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

app.get("/api/user/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await UserModel.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
})

app.post('/api/register', registerUser);
app.post('/api/login', loginUser);
app.use("/api/portfolio", portfolioRoutes)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});