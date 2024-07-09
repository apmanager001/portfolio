import React from 'react'
import styles from '../css/footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
  <div class={styles.footer}>
    <div class={styles.github}>
        <a href="https://github.com/apmanager001" class={styles.footerItem} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
    <div class={styles.footerInstagram}>
        <a href="https://www.instagram.com/foleyautamatic/" class={styles.footerItem} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></div>
    <div class={styles.linkin}>       
        <a href="https://www.linkedin.com/in/robertfoleyiii/" class={styles.footerItem} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></div>
    <div class={styles.footerEmail}>
      <Link to='mailto:robertfoleyiii@gmail.com'><FontAwesomeIcon icon={faEnvelope} id={styles.icon}/>   
      robertfoleyiii@gmail.com
      </Link>
    </div>
  </div>
  )
}

export default Footer