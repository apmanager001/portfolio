import React from 'react'
import styles from  './css/me.module.css'

const Me = () => {
  return (
    <div className={styles.meContainer}>
      <div className={styles.image}>
        <img src="/profile.jpg" />
      </div>
      <div className={styles.text}>
        <h1>About Me</h1>
        <p>
          What to say? I am a reserved person that enjoys learning. You will see
          interests that keep me going and enjoy in downtime. When it comes down
          to it I like to build stuff and enjoy the beauty in what we should be
          enjoying in our every day life. 
        </p>
        <span>Never let your memories be greater
          than your dreams. -Douglas Ivester </span>
      </div>
    </div>
  );
}

export default Me