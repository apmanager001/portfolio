import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./css/blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
     try {
       const response = await axios.get("/getBlogs");
       setBlogs(response.data);
     } catch (error) {
       setError(error.message);
     }
    };

    fetchBlogs();
  }, []);

   if (error) {
     return <div>Error: {error}</div>;
   }
  return (
    <>
      <div className={styles.blogContainer}>
        <h1>Blog List</h1>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
