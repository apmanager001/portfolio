import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../css/header.module.css";
import DarkMode from '../../../portfolio/darkmode/DarkMode'



const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link id={styles.link} to="/">
          <h1>Robert Foley</h1>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.remove}>
          <>
            <DarkMode />
            <Link to="/me">
              <h3 id={styles.link}>Me</h3>
            </Link>
            <Link to="/portfolio">
              <h3 id={styles.link}>Portfolio</h3>
            </Link>
            <Link to="/blog">
              <h3 id={styles.link}>Blog</h3>
            </Link>
            <Link to="/photography">
              <h3 id={styles.link}>Photography</h3>
            </Link>
            <Link to="/contact">
              <h3 id={styles.link}>Contact</h3>
            </Link>
          </>
        </div>
        <div className={styles.search}>
          <div
            className={`${styles.hamburgerIcon} ${
              isMenuOpen ? styles.menuOpen : ""
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {isMenuOpen && (
          <div className={styles.dropdownMenu}>
            <>
              <DarkMode />
              <Link onClick={toggleMenu} to="/me">
                Me
              </Link>
              <Link onClick={toggleMenu} to="/portfolio">
                Portfolio
              </Link>
              <Link onClick={toggleMenu} to="/blog">
                Blog
              </Link>
              <Link onClick={toggleMenu} to="/photography">
                Photography
              </Link>
              <Link onClick={toggleMenu} to="/contact">
                Contact
              </Link>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
