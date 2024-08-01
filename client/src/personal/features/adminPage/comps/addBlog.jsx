import React, {useState, useRef} from 'react'
import styles from '../css/addBlog.module.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const AddBlog = () => {
  const fileInputRef = useRef(null);
   const [formData, setFormData] = useState({
     title: "",
     category: "crypto", // Default category
     resources: "",
     tags: "",
     message: "",
     file: "",
   });

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
     e.preventDefault(); // Prevent default form submission behavior

     // Send form data to backend API using Axios
     axios
       .post("/addBlog", formData)
       .then((response) => {
         toast.success("Blog added successfully:");
         // Optionally, you can perform any additional actions upon successful submission
       })
       .catch((error) => {
         toast.error("Error adding blog:", error);
         // Optionally, you can handle errors or display error messages to the user
       });
   };



  return (
    <>
      <div className={styles.addBlogContainer}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            require
          />
          <input
            type="file"
            id={styles.image}
            name="files"
            accept="image/*"
            onChange={handleChange}
            ref={fileInputRef}
            required
          />
          <select
            className={styles.input}
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="crypto">CryptoBeginsHere</option>
            <option value="portfolio">Robert Foley</option>
          </select>
          <input
            className={styles.input}
            type="text"
            name="resources"
            placeholder="Resources"
            onChange={handleChange}
            require
          />
          <input
            className={styles.input}
            type="text"
            name="tags"
            placeholder="Tags"
            onChange={handleChange}
            require
          />
          <textarea
            className={styles.input}
            type="text"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            require
          />
          <input type="submit" id={styles.button} value="Submit" require />
        </form>
      </div>
    </>
  );
}

export default AddBlog