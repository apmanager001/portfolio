import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import profile from '/profile.jpg'
import styles from "./css/blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/getBlogs");

        const processedBlogs = response.data.map((blog) => {
          const truncateMessage = (message) => {
            return message.split(" ").length > 20
              ? `${message.split(" ").slice(0, 20).join(" ")}...`
              : message;
          };

          return {
            ...blog,
            dateWithoutTime: new Date(blog.date).toLocaleDateString(),
            truncatedMessage: truncateMessage(blog.message),
          };
        });

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

   const handleImageError = (e) => {
     e.target.src = profile;
   };
   
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
                  <div className={styles.column1}>
                    {blog.mainFile ? (
                      <img
                        src={blog.mainFile}
                        className={styles.image}
                        alt="Blog Image"
                        onError={handleImageError}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.column2}>
                  <h2>{blog.title}</h2>
                  
                <p className={styles.p}>{blog.truncatedMessage}</p>
                </div>
                <div className={styles.column3}>
                  <h3>{blog.dateWithoutTime}</h3>
                </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
