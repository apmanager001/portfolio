import React, {useEffect} from 'react'
import TopHeader from '../../../pages/comps/topHeader'
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
        <TopHeader />
        <div className={`${styles.title} ${styles.mobileNone}`}>
          <Link to="/personal" >
            Robert Foley
          </Link>
        </div>
        <div className={`${styles.links} ${styles.mobileNone}`}>
          <Link to="/personal/me" className={styles.about}>
            Me
          </Link>
          <Link to="/personal/blog" className={styles.about}>
            Blog
          </Link>
          <Link to="/personal/photography" className={styles.photography}>
            Photography
          </Link>
          <Link to="/personal/contact" className={styles.contact}>
            Contact
          </Link>
        </div>
        <header className={styles.mobileNav}>
                  <div className={styles.mobileTitle}>
                  <h1>
                  <Link to='/personal'>
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
                  <h2><Link to="/personal/me" className={styles.about}>
                        Me
                      </Link></h2>
                  <h2><Link to="/personal/blog" className={styles.portfolio}>
                        Blog
                      </Link></h2>
                  <h2><Link to="/personal/photography" className={styles.photography}>
                        Photography
                      </Link></h2>
                  <h2><Link to="/personal/contact" className={styles.contact}>
                        Contact
                      </Link></h2>
              </nav>
        </div>
  );
};

export default Header;