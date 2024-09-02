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
              <div className='text-left bg-base-100 rounded-md shadow-lg'>
                <div className='flex h-full'>
                  <div className=' flex justify-center w-32 '>
                    {blog.mainFile ? (
                      <img
                        src={blog.mainFile}
                        className='h-full w-full'
                        alt="Blog Image"
                        onError={handleImageError}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  
                  <div className='flex-1 text-left pl-3 flex flex-col justify-evenly'>
                  <h2>{blog.title}</h2>
                  
                <p className='text-xs text-gray-300'>{blog.truncatedMessage}</p>
                </div>
                <div className={styles.column3}>
                  <p>{blog.dateWithoutTime}</p>
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
