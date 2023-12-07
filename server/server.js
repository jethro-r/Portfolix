
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dbConnections = require("./db");

require("dotenv").config();

dbConnections.initDefaultConnection().then(async () => {
  console.log(" Connected to Portfolix DB ");
});

const server = express();
server.use(cors());
server.use(express.json());

// const userRoute = require("./routes/user.route");
// const portfolioRoute = require("./routes/portfolio.route");

// server.use("/api/v1/users", usersRoute);
// server.use("/api/v1/portfolios", portfolioRoute);

module.exports = server;
