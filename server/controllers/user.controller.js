const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

const userRegister = async (req, res) => {
  console.log("hi")
  let oldUser;
  try {
    // Get user input
    const {
      firstName,
      lastName,
      username,
      emailAddress,
      password,
      confirmPassword,
    } = req.body;

    // Validate user input
    if (
      !(emailAddress && password && firstName && lastName && username,
      confirmPassword)
    ) {
      return res.json({
        error: true,
        message: "All input is required.",
      });
    }

    if (password !== confirmPassword) {
      return res.json({
        error: true,
        message: "Passwords dont match.",
      });
    }

    // check if user already exist
    // Validate if user exist in our database
    oldUser = await UserModel.findOne({
      username: username.toLowerCase(),
    }).exec();

    if (oldUser) {
      return res.json({
        error: true,
        message: "User Already Exist. Please Login",
      });
    }

    // Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = new UserModel({
      firstName,
      lastName,
      username: username.toLowerCase(),
      emailAddress: emailAddress.toLowerCase(), // sanitize: convert emailAddress to lowercase
      password: encryptedPassword,
      portfolios: [],
    });

    await user.save();

    const [registedUser] = await UserModel.where({ username: username }).exec();

    // return new user
    return res.json({
      error: false,
      user: registedUser,
    });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

const userLogin = async (req, res) => {
  try {
    // Get user input
    const { username, password } = req.body;
    // Validate user input
    if (!(username && password)) {
      return res.json({ error: true, message: "All input is required" });
    }
    // Validate if user exist in our database
    const user = await UserModel.findOne({ username }).exec();

    if (user && (await bcrypt.compare(password, user.password))) {
      const [loggedInUser] = await UserModel.where({
        username: username,
      }).exec();

      // user
      return res.json({
        error: false,
        user: loggedInUser,
      });
    } else {
      //if user && confirmed password dont exist then return invalid credentials
      return res.json({
        error: true,
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

module.exports = {
  userRegister,
  userLogin,
};
