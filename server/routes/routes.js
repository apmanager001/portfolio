const express = require("express");
const router = express.Router();
const {
 getMessages,
 getCryptoNewsletter,
 postAddingBlog,
 getBlogs
} = require("../controllers/adminController");
const {
  postContactPro,
  deleteContact,
} = require("../controllers/professionalControllers");
const cors = require("cors");

const url = process.env.SERVER_URL;

//middleware
router.use(
  cors({
    credentials: true,
    origin: url,
  })
);

//Admin post routers
router.get("/messages", getMessages);
router.get('/crypto/newsletter', getCryptoNewsletter)
router.post('/addBlog', postAddingBlog)


//Blog page
router.get("/getBlogs", getBlogs)


//Professional contact post 
router.delete('/deleteContact/:deleteId', deleteContact)
router.post('/contact', postContactPro)


module.exports = router;
