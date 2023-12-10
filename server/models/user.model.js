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
    emailAddress: {
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
    portfolios: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema, 'User');

module.exports = User;
