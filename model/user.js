const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide a unique Email"],
    unique: [true, "This email is already registered"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password"],
    unique: false,
  },
  role: {
    type:String,
    unique: [true, "We are no longer accepting registrations"],
  }

});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
