import React from 'react'
import styles from '../css/cert.module.css'
import { Link } from "react-router-dom";
import CSS from '../../assets/cert/css.pdf'
import CSSResp from "../../assets/cert/cssresponse.pdf";
import devOps from "../../assets/cert/devOps.pdf";
import react from "../../assets/cert/react.pdf";

const Certificate = () => {
  return (
    <div className={styles.certContainer}>
      <div className={styles.first}>
        <h2>CSS</h2>
        <a
          href="https://www.codecademy.com/enrolled/courses/learn-responsive-design"
          target="_blank"
          width="400px"
          height="400px"
        >
          <h3>Syllabus</h3>
        </a>
        |
        <a href={CSS} target="_blank" width="400px" height="400px">
          <h3>Certificate</h3>
        </a>
      </div>
      <div className={styles.first}>
        <h2>CSS Responsive Design</h2>
        <a
          href="https://www.codecademy.com/enrolled/courses/learn-responsive-design"
          target="_blank"
          width="400px"
          height="400px"
        >
          <h3>Syllabus</h3>
        </a>
        |
        <a href={CSSResp} target="_blank" width="400px" height="400px">
          <h3>Certificate</h3>
        </a>
      </div>
      <div className={styles.first}>
        <h2>DevOps</h2>
        <a
          href="https://www.codecademy.com/learn/introduction-to-dev-ops"
          target="_blank"
          width="400px"
          height="400px"
        >
          <h3>Syllabus</h3>
        </a>
        |
        <a href={devOps} target="_blank" width="400px" height="400px">
          <h3>Certificate</h3>
        </a>
      </div>
      <div className={styles.first}>
        <h2>React</h2>
        <a
          href="https://www.codecademy.com/learn/react-101"
          target="_blank"
          width="400px"
          height="400px"
        >
          <h3>Syllabus</h3>
        </a>
        |
        <a href={react} target="_blank" width="400px" height="400px">
          <h3>Certificate</h3>
        </a>
      </div>
    </div>
  );
}

export default Certificate