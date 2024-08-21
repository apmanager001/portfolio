import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from './css/individualBlog.module.css'
import axios from 'axios'
import profile from "/profile.jpg";
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
            mainFile,
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
const handleImageError = (e) => {
  e.target.src = profile;
};


const paragraphs = blog.message
  .split("\n")
  .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogBox}>
        <div className={styles.row}>
          <div className={styles.date}>{date}</div>
        </div>

        <div className={styles.row1}>
          <div className={styles.image}>
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
          <div className={styles.title}>{blog.title}</div>

          <div className={styles.message}>{paragraphs}</div>
          <br></br>
          <div className={styles.author}>Bob Foley</div>
        </div>
        <div className={styles.row2}>
          <div className={styles.tags}>
            {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
              blog.tags.map((tag, index) => (
                <Link
                  key={index}
                  className={styles.tagLink}
                  to={`/tags/${tag.replace("#", "")}`}
                >
                  {tag}
                </Link>
              ))
            ) : (
              <span>No tags available</span>
            )}
          </div>
          <div className={styles.resources}>
            {blog.resources ? (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={`http://www.${blog.resources}`}
              >
                {blog.resources}
              </Link>
            ) : (
              <span>No resources available</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualBlog