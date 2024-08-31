const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser, getAdmin} = require('../controllers/userController')
const cors = require("cors");

const url = [
  process.env.SERVER_URL,
  "http://localhost:5173",
  "http://localhost:5174",
];

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

//auth admin routes
router.get('/admin', getAdmin)



module.exports = router;