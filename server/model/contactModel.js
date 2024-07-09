const mongoose = require("mongoose");
const { Schema } = mongoose;

const Contact = new Schema({
  location: {
    type: String
  },
  name: {
    type: String,
    required: [true, "Please provide your Name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
  },
  message: {
    type: String,
    required: [true, "Please provide a message"],
  },
});

const contact = mongoose.model("Contact", Contact);

module.exports = contact;
