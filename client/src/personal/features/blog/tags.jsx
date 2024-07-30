import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios";
import styles from "./css/blog.module.css";

const Tags = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`/blogs/tag/${id}`);
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
          setBlogs(processedBlogs)
        } catch (error) {
          setError(error.message);
        }
      };

      fetchBlogs();
    }, [id]);
  return (
    <div className={styles.blogPage}>
      <div className={styles.blogContainer}>
        <h1>Blog Posts</h1>
        <h3>Tag: #{id}</h3>
        {blogs.map((blog) => (
          <Link to={`/blog/${blog._id}`} className={styles.link} key={blog.id}>
            <div className={styles.box}>
              <div className={styles.row}>
                <h2>{blog.title}</h2>
                <h3>{blog.dateWithoutTime}</h3>
              </div>
              <p className={styles.p}>{blog.truncatedMessage}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
