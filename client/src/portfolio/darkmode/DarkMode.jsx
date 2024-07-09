import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import styles from "./DarkMode.module.css";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
      document.querySelector("body").setAttribute("data-theme", "light")
      localStorage.setItem("selectedTheme", "light");
    }

    const selectedTheme = localStorage.getItem("selectedTheme")

    if(selectedTheme === "dark" ) {
      setDarkMode();
    }

    const toggleTheme = e => {
        if (e.target.checked) {
            setDarkMode()
        } else{
         setLightMode()
        }
    }
    return (
      <div className={styles.darkMode}>
        <input
          className={styles.darkModeInput}
          type="checkbox"
          id="darkmode-toggle"
          defaultChecked={selectedTheme === "dark"}
          onChange={toggleTheme}
        />
        <label className={styles.darkModeLabel} htmlFor="darkmode-toggle">
          <FontAwesomeIcon id={styles.sun} icon={faSun} alt="Sun" />
          <FontAwesomeIcon
            id={styles.moon}
            alt="Moon"
            icon={faMoon}
          />
        </label>
      </div>
    );
};

export default DarkMode;
