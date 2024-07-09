import React, {useState}from "react";
import styles from "./css/home.module.css";
import Header from "./comps/header";
import Footer from "./comps/footer";
import About from "./comps/about";
import Portfolio from "./comps/portfolio";
import Contact from "./comps/contact";
import Certificate from "./comps/certificate";
import Skills from "./comps/skills";
import { Link } from "react-router-dom";
import { Graph } from "react-github-activity-calendar";

const Home = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState("Portfolio One");

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  
  return (
    <>
      <div className={styles.homeContainer}>
        <Header />
        <div className={`${styles.about} ${styles.smallContainer}`}>
          <div className={styles.text} id="about">
            About
          </div>
          <About />
        </div>
        <div className={`${styles.portfolio} ${styles.smallContainer}`}>
          <div className={styles.text} id="portfolio">
            Portfolio's
          </div>
          <div className={styles.portLinks}>
            <span
              className={
                selectedPortfolio === "Portfolio One" ? styles.selected : ""
              }
              onClick={() => handlePortfolioClick("Portfolio One")}
            >
              Habits
            </span>
            {" | "}
            <span
              className={
                selectedPortfolio === "Portfolio Two" ? styles.selected : ""
              }
              onClick={() => handlePortfolioClick("Portfolio Two")}
            >
              Community Art
            </span>
            {" | "}
            <span
              className={
                selectedPortfolio === "Portfolio Three" ? styles.selected : ""
              }
              onClick={() => handlePortfolioClick("Portfolio Three")}
            >
              LM Treasure Trove
            </span>
          </div>
          <div className={styles.portBody}>
            {selectedPortfolio === "Portfolio One" && (
              <div>
                <div className={`${styles.portOne} ${styles.portSections}`}>
                  <Link to="https://habiting.netlify.app/" target="_blank">
                    <div className={styles.imageOne}></div>
                  </Link>
                  <div className={styles.portText}>
                    <h2>Habit Tracker:</h2>
                    <span>
                      <p>- React Frontend, Supabase database</p>
                      <p>- Account login using OAuth</p>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {selectedPortfolio === "Portfolio Two" && (
              <div>
                <div className={`${styles.portTwo} ${styles.portSections}`}>
                  <Link to="https://lmtreasuretrove.com/" target="_blank">
                    <div className={styles.imageTwo}></div>
                  </Link>
                  <div className={styles.portText}>
                    <h2>Pixel Art:</h2>
                    <span>
                      <p>- MERN stack</p>
                      <p>- </p>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {selectedPortfolio === "Portfolio Three" && (
              <div>
                <div className={`${styles.portThree} ${styles.portSections}`}>
                  <Link to="https://lmtreasuretrove.com/" target="_blank">
                    <div className={styles.imageThree}></div>
                  </Link>
                  <div className={styles.portText}>
                    <h2>Auction website:</h2>
                    <span>
                      <p>- MERN stack</p>
                      <p>- Frontend hosted on Netlify, Backend on Heroku</p>
                      <p>- Image on AWS S3</p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`${styles.skills} ${styles.smallContainer}`}>
          <div className={styles.text} id="skills">
            Skills
          </div>
          <Skills />
        </div>

        <div className={`${styles.certificate} ${styles.smallContainer}`}>
          <div className={styles.text} id="cert">
            Certificates
          </div>
          <Certificate />
        </div>
        <div className={`${styles.contact} ${styles.smallContainer}`}>
          <div className={styles.text} id="contact">
            Contact
          </div>
          <Contact />
        </div>
      </div>

      <div className={styles.App}>
        <Graph
          userName={githubUserName}
          backgroundColor={bgcolor}
          
          color={textColor}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
