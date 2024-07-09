import React, {useEffect} from 'react'
import styles from '../css/header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {
  
  useEffect(() => {
        
    const menuIcon = document.getElementById(styles.mobileMenu);
    const nav = document.querySelector('nav');

    const handleMenuToggle = () => {
    
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        menuIcon.classList.toggle(styles.open);
    };

    menuIcon.addEventListener('click', handleMenuToggle);

    return () => {
        menuIcon.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={`${styles.title} ${styles.mobileNone}`}>
        <Link to="/">Robert Foley</Link>
      </div>
      <div className={`${styles.links} ${styles.mobileNone}`}>
        <Link to="/me" className={styles.about}>
          Me
        </Link>
        <Link to="/portfolio" className={styles.about}>
          Portfolio
        </Link>
        <Link to="/blog" className={styles.about}>
          Blog
        </Link>
        <Link to="/photography" className={styles.photography}>
          Photography
        </Link>
        <Link to="/contact" className={styles.contact}>
          Contact
        </Link>
      </div>
      <header className={styles.mobileNav}>
        <div className={styles.mobileTitle}>
          <h1>
            <Link to="/">Robert Foley</Link>
          </h1>
        </div>
        <div className={styles.mobileMenu}>
          <span id={styles.mobileMenu}>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </div>
      </header>

      <nav className={styles.mobileNav2}>
        <h2>
          <Link to="/me" className={styles.about}>
            Me
          </Link>
        </h2>
        <h2>
          <Link to="/portfolio" className={styles.about}>
            Portfolio
          </Link>
        </h2>
        <h2>
          <Link to="/blog" className={styles.portfolio}>
            Blog
          </Link>
        </h2>
        <h2>
          <Link to="/photography" className={styles.photography}>
            Photography
          </Link>
        </h2>
        <h2>
          <Link to="/contact" className={styles.contact}>
            Contact
          </Link>
        </h2>
      </nav>
    </div>
  );
};

export default Header;