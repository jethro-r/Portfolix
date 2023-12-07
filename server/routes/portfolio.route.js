const express = require("express");
const router = express.Router();

const {
  createPortfolio,
  deletePortfolio,
} = require("../controllers/portfolio.controller");

router.post("/create", createPortfolio);

router.delete("/delete", deletePortfolio);

module.exports = router;
