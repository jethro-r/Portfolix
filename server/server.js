const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const examplesRouter = require("./routes/example");
const dbConnections = require("./db");

require("dotenv").config();

dbConnections.initDefaultConnection().then(async () => {
  console.log(" CONNECTED TO MONGO ");
});

const uri = process.env.mongoURI;
mongoose.connect(uri);
const connection = mongoose.connection;

const server = express();
server.use(cors());
server.use(express.json());

const userRoute = require("./routes/user.route");
const portfolioRoute = require("./routes/portfolio.route");

server.use("/api/v1/users", usersRoute);
server.use("/api/v1/portfolios", portfolioRoute);
server.use(express.static(path.join(__dirname, "./public")));

module.exports = server;
