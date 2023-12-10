const PortfolioModel = require("../models/portfolio.model");

const createPortfolio = async (req, res) => {
  try {
    // Get portfolioInfo
    const { email, portfolio } = req.body;

    // Validate portfolioInfo
    if (!(email && portfolio)) {
      return res.json({
        error: true,
        message: "Invalid request.",
      });
    }

    const requestedUser = await UserModel.findOne({
      email: email.toLowerCase(),
    }).exec();

    if (!requestedUser) {
      return res.json({
        error: true,
        message: "User does not exist.",
      });
    }

    const result = await UserModel.findOneAndUpdate(
      { email: email.toLowerCase() },
      { $push: { portfolios: portfolio } }
    );

    if (result.error) {
      return res.json({
        error: true,
        message: "Database error.",
      });
    }
    // return result
    return res.json({
      error: false,
      message: "portfolio created.",
    });
  } catch (err) {
    console.log(err);
  }
};

const deletePortfolio = async (req, res) => {
  try {
    // Get portfolioInfo
    const { email, portfolio } = req.body;

    // Validate portfolioInfo
    if (!(email && portfolio)) {
      return res.json({
        error: true,
        message: "Invalid request.",
      });
    }

    const requestedUser = await UserModel.findOne({
      email: email.toLowerCase(),
    }).exec();

    if (!requestedUser) {
      return res.json({
        error: true,
        message: "User does not exist.",
      });
    }

    const filteredportfolios = requestedUser.portfolios.filter(
      (m) => m.id !== portfolio.id
    );

    const result = await UserModel.updateOne(
      { email: email.toLowerCase() },
      { $set: { portfolios: filteredportfolios } }
    );

    if (result.error) {
      return res.json({
        error: true,
        message: "Database error.",
      });
    }
    // return result
    return res.json({
      error: false,
      message: "portfolio deleted.",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createPortfolio,
  deletePortfolio,
};
