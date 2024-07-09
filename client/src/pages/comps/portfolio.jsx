import React from 'react'
import styles from '../css/portfolio.module.css'
import {Link} from 'react-router-dom'


const Portfolio = () => {
  return (
    <>


    <div className={styles.fullPort}>
        <div className={styles.title}>
            <h1>Check out some of the Pojects I am working on</h1>
        </div>
        <div className={styles.portfolio}>
            
        <div className={`${styles.portOne} ${styles.portSections}`}>
        <Link to='https://habiting.netlify.app/' target="_blank"><div className={styles.imageOne}></div></Link>
            <div className={styles.portText}>
            <h2>Habit</h2>
            <span>Simple Deisgn using React to manage multiple pages. Functionality of allowing users to keep track of daily tasks to motivate build habits.</span>
                </div>
        </div>
        <div className={`${styles.portTwo} ${styles.portSections}`}>
            <div className={styles.imageTwo}></div>
            <div className={styles.portText}>
            <h2>Community Art</h2>
            <span>Allows a community to come together to build a canvas together. Each user has a limited turn before passed to next user. Check out some of the older canvas's made.</span>
                </div>
        </div>
        <div className={`${styles.portThree} ${styles.portSections}`}>
            <div className={styles.imageThree}></div>
            <div className={styles.portText}>
            <h2>Habit</h2>
            <span>Simple Deisgn using React to manage multiple pages. Functionality of allowing users to keep track of daily tasks to motivate build habits.</span>
            </div>
        </div>
        </div>
    </div>








    </>
  )
}

export default Portfolio