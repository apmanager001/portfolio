import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './css/personal.module.css'
import photo1 from "/photo1.jpeg";
import photo2 from "/photo2.jpeg";
import photo3 from "/photo3.jpeg";

const PersonalHomePage = () => {
  const [blog1, setBlog1] = useState('');
  const [blog2, setBlog2] = useState('');
  const [blog3, setBlog3] = useState('');
  const [blogs, setBlogs] = useState([]);

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
      
      useEffect(() => {
        if (blogs.length >= 3) {
          setBlog1(blogs[0]);
          setBlog2(blogs[1]);
          setBlog3(blogs[2]);
        }
      }, [blogs]);
  return (
    <>
      <div className={styles.personalContainer}>
        <div className={styles.background}>
          <h1>Recent Blogs</h1>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <div className={styles.picture}>
                <img src={photo1} alt="Cover" className={styles.coverPhoto} />
              </div>
              <div className={styles.bottom}>
                <Link to={`/blog/${blog1._id}`}>
                  <p>{blog1.title}</p>
                </Link>

                <p>{blog1.dateWithoutTime}</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.picture}>
                <img src={photo2} alt="Cover" className={styles.coverPhoto} />
              </div>
              <div className={styles.bottom}>
                <Link to={`/blog/${blog2._id}`}>
                  <p>{blog2.title}</p>
                </Link>
                <p>{blog2.dateWithoutTime}</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.picture}>
                <img src={photo3} alt="Cover" className={styles.coverPhoto} />
              </div>

              <div className={styles.bottom}>
                <Link to={`/entry/${blog3._id}`}>
                  <p>{blog3.title}</p>
                </Link>
                <p>{blog3.dateWithoutTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalHomePage;
