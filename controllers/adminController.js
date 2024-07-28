const Contact = require('../model/contactModel')
const Newsletter = require("../model/newsletterModel");
const AddBlog = require('../model/addBlogModel.js')

const getMessages = async (req, res) => {
  try {
    let query = Contact.find({});


    const allMessages = await query.exec();

    res.json(allMessages);
  } catch (error) {
    console.error("Error fetching all messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//getting crypto newsletter email
const getCryptoNewsletter = async (req, res) => {
  try {
    let query = Newsletter.find({});

    const allEmail = await query.exec();

    res.json(allEmail);
  } catch (error) {
    console.error("Error fetching all messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const postAddingBlog = async (req, res) => {
  try {
    const { title, category, resources, tags, message} = req.body;
   date = new Date()
    const blog = await AddBlog.create({
      title,
      category,
      resources,
      tags,
      message,
      author: 'Admin',
      date: date,
    });
    return res.json(blog);
  } catch (error) {
    console.log(error);
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await AddBlog.find().sort({ date: -1 }); // -1 for descending order
    return res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve blogs" });
  }
};

const getIndividualBlog = async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from request parameters
    const blog = await AddBlog.findById(id); // Find the blog by id

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.json(blog); // Return the found blog
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to retrieve blog" });
  }
};

module.exports = {
  getMessages,
  getCryptoNewsletter,
  postAddingBlog,
  getBlogs,
  getIndividualBlog,
};