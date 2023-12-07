require("dotenv").config();

const mongoConfig = {
  mongoURI: process.env.mongoURI,
};

const mongoose = require("mongoose");

// Create mongo connection
const defaultConnection = mongoose;

const initDefaultConnection = function initDefaultConnection() {
  console.log("mongoURI: ", mongoConfig.mongoURI);
  return mongoose.connect(
    mongoConfig.mongoURI,
  );
};

module.exports = { initDefaultConnection, defaultConnection };
