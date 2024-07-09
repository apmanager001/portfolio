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


module.exports = {
    getMessages,
    getCryptoNewsletter,
    postAddingBlog
}