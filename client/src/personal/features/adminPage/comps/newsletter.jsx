import React, {useState, useEffect} from 'react'
import styles from '../css/newsletter.module.css'
import axios from 'axios'

const Newsletter = () => {
  const [newsletterData, setNewsletterData] = useState([]);

   useEffect(() => {
    // Fetch newsletter information when component mounts
    axios
      .get(`/crypto/newsletter`)
      .then((response) => {
        // Update state with fetched newsletter information
        setNewsletterData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching newsletter info:", error);
      });
  }, []);

  const generateNewsletterContainer = () => {
    return newsletterData.map((subscriber, index) => (
      <tr key={index}>
        <td>{subscriber.firstName}</td>
        <td>{subscriber.lastName}</td>
        <td>{subscriber.email}</td>
      </tr>
    ));
  };


  return (
    <>
      <div className={styles.newsletterContainer}>
        <h1>Crypto Begins Here</h1>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            {generateNewsletterContainer()}
          </table>
        
      </div>
    </>
  );
}

export default Newsletter