const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema(
  {
    firstName: { type: String, default: "", required: false, trim: true },
    lastName: { type: String, default: "", required: false, trim: true },
    emailAddress: { type: String, default: "", required: false, trim: true },
    address: { type: String, default: "", required: false, trim: true },
    phoneNumber: { type: String, default: "", required: false, trim: true },
    careerTitle: { type: String, default: "", required: false, trim: true },
    driversLicence: { type: String, default: "", required: false, trim: true },
    degreeTitle: { type: String, default: "", required: false, trim: true },
    statement: { type: String, default: "", required: false, trim: true },
    templateName: { type: String, default: "", required: false, trim: true },
    userID: { type: String, default: "", required: false, trim: true },
    accomplishments: [
      {
        title: { type: String, default: "", required: false, trim: true },
        body: { type: String, default: "", required: false, trim: true },
      },
    ],
    education: [
      {
        title: { type: String, default: "", required: false, trim: true },
        location: { type: String, default: "", required: false, trim: true },
        completionDate: {
          type: String,
          default: "",
          required: false,
          trim: true,
        },
      },
    ],
    skills: [
      {
        title: { type: String, default: "", required: false, trim: true },
        body: { type: String, default: "", required: false, trim: true },
      },
    ],
    experience: [
      {
        title: { type: String, default: "", required: false, trim: true },
        startMonth: { type: String, default: "", required: false, trim: true },
        startYear: { type: String, default: "", required: false, trim: true },
        endMonth: { type: String, default: "", required: false, trim: true },
        endYear: { type: String, default: "", required: false, trim: true },
        body: { type: String, default: "", required: false, trim: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema, 'Portfolio');


module.exports = PortfolioModel;
