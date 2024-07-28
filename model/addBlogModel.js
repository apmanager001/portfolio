const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddBlog = new Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  resources: {
    type: String,
  },
  tags: {
    type: String,
  },
  message: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
  }
});

const addBlog = mongoose.model("addBlog", AddBlog);

module.exports = addBlog;
