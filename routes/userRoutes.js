const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/userController')
const cors = require("cors");

const url = process.env.SERVER_URL;

//middleware
router.use(
  cors({
    credentials: true,
    origin: url,
  })
);


//Auth post routers
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)



module.exports = router;