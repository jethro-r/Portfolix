const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema(
  {
    firstName: { type: String, default: "", required: False, trim: true },
    lastName: { type: String, default: "", required: False, trim: true },
    emailAddress: { type: String, default: "", required: False, trim: true },
    address: { type: String, default: "", required: False, trim: true },
    phoneNumber: { type: String, default: "", required: False, trim: true },
    careerTitle: { type: String, default: "", required: False, trim: true },
    driversLicence: { type: String, default: "", required: False, trim: true },
    degreeTitle: { type: String, default: "", required: False, trim: true },
    statement: { type: String, default: "", required: False, trim: true },
    templateName: { type: String, default: "", required: False, trim: true },
    accomplishments: [
      {
        title: { type: String, default: "", required: False, trim: true },
        body: { type: String, default: "", required: False, trim: true },
      },
    ],
    education: [
      {
        title: { type: String, default: "", required: False, trim: true },
        location: { type: String, default: "", required: False, trim: true },
        completionDate: {
          type: String,
          default: "",
          required: False,
          trim: true,
        },
      },
    ],
    skills: [
      {
        title: { type: String, default: "", required: False, trim: true },
        body: { type: String, default: "", required: False, trim: true },
      },
    ],
    experience: [
      {
        title: { type: String, default: "", required: False, trim: true },
        startMonth: { type: String, default: "", required: False, trim: true },
        startYear: { type: String, default: "", required: False, trim: true },
        endMonth: { type: String, default: "", required: False, trim: true },
        endYear: { type: String, default: "", required: False, trim: true },
        body: { type: String, default: "", required: False, trim: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;
