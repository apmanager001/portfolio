import React from 'react'
import {Link} from 'react-router-dom'
import styles from './css/photo.module.css'


const Photo = () => {

  return (
    <>
      <div className={styles.photoContainer}>
        <h1 id={styles.photography}><Link to="https://www.instagram.com/foleyautamatic/" target="_blank">My Photography</Link></h1>
          <div class={styles.photo} id="photo">
                    <img src='/insta/1.jpg' alt="1" id={styles.image} />
                
                    <img src='/insta/2.jpg' alt="2" id={styles.image} />
                
                    <img src='/insta/3.jpg' alt="3" id={styles.image} />
              
                    <img src='/insta/4.jpg' alt="4" id={styles.image} />
              
                    <img src='/insta/5.jpg' alt="5" id={styles.image} />
              
                    <img src='/insta/6.jpg' alt="6" id={styles.image} />
              
                    <img src='/insta/7.jpg' alt="7" id={styles.image} />
                
                    <img src='/insta/8.jpg' alt="8" id={styles.image} />
                
                    <img src='/insta/9.jpg' alt="9" id={styles.image} />
                
                    <img src='/insta/10.jpg' alt="10" id={styles.image} />
                
                    <img src='/insta/11.jpg' alt="11" id={styles.image} />
              
                    <img src='/insta/12.jpg' alt="12" id={styles.image} />
                
                    <img src='/insta/13.jpg' alt="13" id={styles.image} />
              
                    <img src='/insta/14.jpg' alt="14" id={styles.image} />
              
                    <img src='/insta/15.jpg' alt="15" id={styles.image} />
                
                    <img src='/insta/16.jpg' alt="16" id={styles.image} />
              
                    <img src='/insta/17.jpg' alt="17" id={styles.image} />
                
                    <img src='/insta/18.jpg' alt="18" id={styles.image} />

        </div> 
      </div>
    </>
  )
}

export default Photo