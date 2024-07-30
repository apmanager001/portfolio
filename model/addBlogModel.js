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
    type: [String], // This indicates that 'resources' is an array of strings
    validate: {
      validator: function (v) {
        return v.every((tag) => /^#[\w]+$/.test(tag));
      },
      message: (props) => `${props.value} is not a valid hashtag!`,
    },
  },
  message: {
    type: String,
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const addBlog = mongoose.model("addBlog", AddBlog);

module.exports = addBlog;
