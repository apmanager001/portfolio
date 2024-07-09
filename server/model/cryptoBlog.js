const mongoose = require("mongoose");
const { Schema } = mongoose;

const cryptoBlog = new Schema({
 
});

const CryptoBlog = mongoose.model("CryptoBlog", cryptoBlog);

module.exports = CryptoBlog;
