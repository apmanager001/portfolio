const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
 getMessages,
 getCryptoNewsletter,
 postAddingBlog,
 getBlogs,
 getIndividualBlog,
 getTag
} = require("../controllers/adminController");
const {
  postContactPro,
  deleteContact,
} = require("../controllers/professionalControllers");
const cors = require("cors");

const url = [process.env.SERVER_URL, "http://localhost:5173"];

//middleware
router.use(
  cors({
    credentials: true,
    origin: url,
  })
);

//multer 
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
upload.single("image");

//Admin post routers
router.get("/messages", getMessages);
router.get('/crypto/newsletter', getCryptoNewsletter)
router.post('/addBlog', postAddingBlog)


//Blog page
router.get("/getBlogs", getBlogs)
router.get("/blog/:id", getIndividualBlog)
router.get("/blogs/tag/:id", getTag);

//Professional contact post 
router.delete('/deleteContact/:deleteId', deleteContact)
router.post('/contact', postContactPro)


module.exports = router;
