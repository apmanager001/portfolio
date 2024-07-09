import React, { useEffect }from 'react'
import TopHeader from './topHeader'
import styles from '../css/header.module.css'
import {Link} from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
      <TopHeader />
      <div className={`${styles.title} ${styles.mobileNone}`}>
        <Link href="/" >
          Robert Foley
        </Link>
      </div>
      <div className={`${styles.links} ${styles.mobileNone}`}>
        <ScrollLink to="about" smooth={true} duration={500} offset={-75} className={styles.about}>
          About
        </ScrollLink>
        <ScrollLink to="portfolio" smooth={true} duration={500} offset={-75} className={styles.portfolio}>
          Portfolio
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} offset={-100} className={styles.skills}>
          Skills
        </ScrollLink>
        <ScrollLink to="cert" smooth={true} duration={500} offset={-100} className={styles.cert}>
          Certificates
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-100} className={styles.contact}>
          Contact
        </ScrollLink>
      </div>
      <header className={styles.mobileNav}>
                <div className={styles.mobileTitle}>
                  <h1>
                  <Link href="/" >
                    Robert Foley
                  </Link>
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
                <h2><ScrollLink to="about" smooth={true} duration={500} offset={-100} className={styles.about}>
                      About
                    </ScrollLink></h2>
                <h2><ScrollLink to="portfolio" smooth={true} duration={500} offset={-115} className={styles.portfolio}>
                      Portfolio
                    </ScrollLink></h2>
                <h2><ScrollLink to="skills" smooth={true} duration={500} offset={-100} className={styles.skills}>
                      Skills
                    </ScrollLink></h2>
                <h2><ScrollLink to="cert" smooth={true} duration={500} offset={-100} className={styles.cert}>
                      Certificates
                    </ScrollLink></h2>    
                <h2><ScrollLink to="contact" smooth={true} duration={500} offset={-75} className={styles.contact}>
                      Contact
                    </ScrollLink></h2>
            </nav>
    </div>
  );
};

export default Header;