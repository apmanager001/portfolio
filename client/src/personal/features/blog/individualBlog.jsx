import React, {useState, useEffect} from 'react'
import styles from './css/individualBlog.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const IndividualBlog = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const [date, setDate] = useState([]);
    useEffect(() => {
      const fetchEntry = async () => {
        try {
          const response = await axios.get(`/blog/${id}`);
          const {
            title,
            category,
            resources,
            tags,
            message,
            author,
            date,
          } = response.data;

          setBlog(response.data);
          const dateWithoutTime = new Date(response.data.date).toLocaleDateString();
          setDate(dateWithoutTime)
        } catch (error) {
          console.error(error);
        }
      };
      fetchEntry();
    }, [id]);

console.log(blog)
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogBox}>
        <div className={styles.row}>
          <div className={styles.author}>{blog.author}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.row1}>
            <div className={styles.title}>{blog.title}</div>
            <div className={styles.category}>{blog.category}</div>
            <div className={styles.message}>{blog.message}</div>
        </div>
        <div className={styles.row}>
          <div className={styles.tags}>
            {blog.tags}
          </div>
          <div className={styles.resources}>
            {blog.resources}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualBlog