const User = require("../model/user.js");
const dotenv = require("dotenv").config();
const { hashPassword, comparePassword } = require("../helpers/auth.js");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Checking password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password required and needs 6 characters",
      });
    }
    //Check if email is email exists
    const exist = await User.findOne({ role: "admin" });
    if (exist) {
      return res.json({
        error: "We are not accepting any more Registrations, thank you.",
      });
    }

    //hashing password
    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      email,
      password: hashedPassword,
      role: "member",
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

//Login Admin
const loginUser = async (req, res) => {
  try {
   
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(407).json({
        error: "No User found",
      });
    }
    if (user.role !== 'admin') {
       return res.status(206).json({
         error: "Sorry you can not login yet",
       });
    }

    //check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstname: user.firstName,
        },
        process.env.JWT_SECRET,
        {}
      );
      res
        .cookie("token", token, {
          maxAge: 3600000,
        })
        .json({ success: true });
    } else {
      return res.status(401).json({
        error: "Your password Doesnt match our record",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//logout user
const logoutUser = async (req, res) => {
  try {
    // Clear the token cookie by setting its expiration date to a past time
    res.clearCookie("token").send("User logged out successfully");

  } catch (error) {
    console.log(error);
    res.status(500).send("Error logging out");
  }
};


module.exports = { registerUser, loginUser, logoutUser };
