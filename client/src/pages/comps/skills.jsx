import React, {useState, useEffect} from 'react'
import styles from '../css/skills.module.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faHtml5, faCss3Alt, faGitAlt, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = (text) => {
    setTooltipText(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };
  useEffect(() => {
    // Effect to handle tooltip visibility
    if (tooltipText) {
      const timer = setTimeout(() => {
        setTooltipText("");
      }, 3000); // Hide tooltip after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [tooltipText]);

  return (
    <div className={styles.icons}>
      <div className={styles.tooltip}>{tooltipText}</div>
      <Link
        to="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faHtml5}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("HTML")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faCss3Alt}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("CSS")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faJs}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("JavaScript")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faReact}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("React")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faNodeJs}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("Node.js")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <div className={styles.icon}>SQL</div>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Glossary/Git"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faGitAlt}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("Git")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link to="https://github.com" target="_blank">
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("GitHub")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Glossary/Git"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faDatabase}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("Database Management")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>

      <Link
        to="https://developer.mozilla.org/en-US/docs/Glossary/Git"
        target="_blank"
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faServer}
            className={styles.icon}
            onMouseEnter={() => handleMouseEnter("Server")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </Link>
    </div>
  );
}

export default Skills