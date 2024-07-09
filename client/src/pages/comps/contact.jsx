import React, {useState} from 'react'
import styles from '../css/contact.module.css'
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send form data to backend API using Axios
    axios
      .post("/contact", formData)
      .then((response) => {
        toast.success("Thank you sending your message!");
        setFormData({
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Error sending this message:", error);
      });
  };


  return (
    <>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit}>
          <div className={styles.contactForm}>
            <h1>Contact</h1>
            <input
              id={styles.email}
              placeholder="Your Email..."
              name="email"
              type="text"
              onChange={handleChange}
              required
            />
            <textarea
              id={styles.message}
              placeholder="Your Message..."
              name="message"
              type="text"
              onChange={handleChange}
              required
            ></textarea>

            <input type="submit" value="Submit" id={styles.sub} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact