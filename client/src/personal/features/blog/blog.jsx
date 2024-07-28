import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import styles from "./css/blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
     try {
       const response = await axios.get("/getBlogs");

       const processedBlogs = response.data.map((blog) => ({
         ...blog,
         dateWithoutTime: new Date(blog.date).toLocaleDateString(),
       }));
   
       setBlogs(processedBlogs);
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
      <div className={styles.blogPage}>
        <div className={styles.blogContainer}>
          <h1>Blog Posts</h1>
          {blogs.map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              className={styles.link}
              key={blog.id}
            >
              <div className={styles.box}>
                <div className={styles.row}>
                  <h2>{blog.title}</h2>
                  <h3>{blog.dateWithoutTime}</h3>
                </div>

                <p class={styles.p}>{blog.message}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
