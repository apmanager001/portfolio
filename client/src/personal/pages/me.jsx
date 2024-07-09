import React from 'react'
import Header from './comps/header'
import Footer from './comps/footer'
import styles from  './css/me.module.css'

const Me = () => {
  return (
    <div>
        <Header />
            <div className={styles.meContainer}>
                <div className={styles.image}>
                    <img src='/profile.jpg' />
                </div>
                <div className={styles.text} >
                    <h1>About Me</h1>
                    <span></span>
                </div>
            </div>
            
        
        <Footer />
    </div>
  )
}

export default Me