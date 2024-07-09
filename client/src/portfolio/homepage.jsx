import React, {useState} from "react";
import styles from "./css/homepage.module.css";
import photos from "/profile.jpg"
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ImageCarousel from "./carousel";
import DarkMode from "./darkmode/DarkMode";
import image1 from "/mytripmaps.jpg"
import image2 from "/newadv.jpg"
import image3 from "/lmtreasure.jpg";
import image4 from "/habiting.jpg";

const Homepage = () => {

  const images = [image1, image2, image3, image4];




  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <div className={`${styles.statBox} ${styles.glow}`} id={styles.name}>
          <p>Robert Foley</p>
        </div>
        <div className={`${styles.statBox} ${styles.glow}`}>
          <a href="https://robertfoley.us/" target="new_window">
            My Personal Website
          </a>
        </div>
        <div className={`${styles.statBox} ${styles.glow}`}>
          <DarkMode />
        </div>
      </div>
      <div className={`${styles.profile} ${styles.glow}`}>
        <div className={styles.profileHeader}>
          <img src={photos} alt="My Photo" />
          <button id={styles.cv} className={styles.glow}>
            Download CV
          </button>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.bioContainer}>
            <p>Location: Michigan, USA</p>

            <p>Job: Full Stack Developer</p>
            <p>Availability: Available to work</p>
            <p>Bio:</p>
            <p>
              What to say? I am a reserved person that enjoys learning. You will
              see interests that keep me going and enjoy in downtime. When it
              comes down to it I like to build stuff and enjoy the beauty in
              what we should be enjoying in our every day life. Never let your
              memories be greater than your dreams. -Douglas Ivester
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.projects} ${styles.glow}`}>
        <h3>My Projects</h3>

        <div className={`${styles.projectDiv} ${styles.glow}`}>
          <Link href="/">Paint</Link>
        </div>

        <div className={`${styles.projectDiv} ${styles.glow}`}>
          <a href="/">Habits</a>
        </div>

        <div className={`${styles.projectDiv} ${styles.glow}`}>
          <a href="/">Movie Chat</a>
        </div>

        <div className={`${styles.projectDiv} ${styles.glow}`}>
          <a href="https://newadventures100.netlify.app">New Adventure</a>
        </div>

        <div className={`${styles.projectDiv} ${styles.glow}`}>
          <a href="https://mytripmaps200.netlify.app">My Trip Maps</a>
        </div>
      </div>

      <div className={`${styles.techStack} ${styles.glow}`}>
        <h3>Technology I use</h3>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>HTML
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>CSS
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>REACT
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>EXPRESS
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>MONGO DB
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>Node JS
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>JavaScript
        </div>
        <div className={`${styles.techDiv} ${styles.glow}`}>
          <div className={styles.techImage}></div>SQL
        </div>
      </div>
      <div className={`${styles.workExperience} ${styles.glow}`}>
        <h3>Completed Projects</h3>
        <div className={styles.completeProjects}>
          <ImageCarousel images={images} title="Project Carousel" />
        </div>
      </div>
      <div className={`${styles.resume} ${styles.glow}`}>
        <h3>Resume</h3>
        <div className={styles.company}>Rocket Mortgage</div>
        <div className={styles.title}>Mortgage Banker</div>
        <div className={styles.date}>08/2015 - 05/2022</div>
        <div className={styles.company}>Discover Financial Services</div>
        <div className={styles.title}>Sr. IRA Account Manager </div>
        <div className={styles.date}>11/2013 - 02/2015</div>
      </div>
      <div className={`${styles.contact} ${styles.glow}`}>
        <>Socials and Contact</>
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
    </div>
  );
};

export default Homepage;
