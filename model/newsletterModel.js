const mongoose = require("mongoose");
const { Schema } = mongoose;

const Newsletter = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
  },
  firstName: {
    type: String,
    required: [true, "Please provide your First Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your Last Name"],
  },
});

const newsletter = mongoose.model("Newsletter", Newsletter);

module.exports = newsletter;
