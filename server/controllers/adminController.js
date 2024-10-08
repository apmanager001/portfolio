const Contact = require('../model/contactModel')
const Newsletter = require("../model/newsletterModel");
const AddBlog = require('../model/addBlogModel.js')
const { uploadToS3, deleteFromS3 } = require("../helpers/uploadImage.js");

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
    const { title, category, resources, tags, message } = req.body;
    const date = new Date();

    // Assuming multer stores files in req.files with the correct names
    const fileData = req.files["file"][0];
    const otherFiles = req.files["otherFiles"];

    // Upload main file
    const url = await uploadToS3(fileData);

    // Upload additional files
    const uploadedFiles = [];
    if (otherFiles && Array.isArray(otherFiles)) {
      for (const file of otherFiles) {
        const fileUrl = await uploadToS3(file);
        uploadedFiles.push(fileUrl);
      }
    }

    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => /^#[a-zA-Z0-9_]+$/.test(tag));

    const blog = await AddBlog.create({
      mainFile: url,
      title,
      category,
      resources,
      tags: tagsArray,
      message,
      otherFiles: uploadedFiles,
      author: "Admin",
      date: date,
    });

    return res.json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error adding blog" });
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

const getTag = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Tag is required" });
    }
    const newId = id.startsWith("#") ? id : `#${id}`;
    // Find blogs that contain the specified tag
    const blogs = await AddBlog.find({ tags: newId});

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found with this tag" });
    }

    return res.json(blogs);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while searching for the tag" });
  }
};

module.exports = {
  getMessages,
  getCryptoNewsletter,
  postAddingBlog,
  getBlogs,
  getIndividualBlog,
  getTag
};