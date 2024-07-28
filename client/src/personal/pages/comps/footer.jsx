import React from 'react'
import styles from '../css/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.github}>
        <a
          href="https://github.com/apmanager001"
          className={styles.footerItem}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className={styles.footerInstagram}>
        <a
          href="https://www.instagram.com/foleyautamatic/"
          className={styles.footerItem}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className={styles.linkin}>
        <a
          href="https://www.linkedin.com/in/robertfoleyiii/"
          className={styles.footerItem}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className={styles.footerEmail}>
        <a href="mailto:robertfoleyiii@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          robertfoleyiii@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Footer