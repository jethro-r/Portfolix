const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    password: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
    portfolios: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
