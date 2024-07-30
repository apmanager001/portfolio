import React, {useState} from 'react'
import axios from 'axios'
import styles from './css/admin.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBlog, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Messages from './comps/messages';
import AddBlog from './comps/addBlog';
import Newsletter from './comps/newsletter'

const Admin = () => {
    const [selectedLink, setSelectedLink] = useState("messages");

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    const handleLogout = async () => {
      try {
        await axios.post("/logout");
        window.location.href = "/personal/login";
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };
  return (
      <div className={styles.adminContainer}>
        <div className={styles.navBar}>
          <a href="#messages" onClick={() => handleLinkClick("messages")}>
            <FontAwesomeIcon className={styles.icon} icon={faMessage} />
            Messages
          </a>
          <a href="#addBlog" onClick={() => handleLinkClick("addBlog")}>
            <FontAwesomeIcon className={styles.icon} icon={faBlog} />
            Add Blogs
          </a>
          <a href="#newsletter" onClick={() => handleLinkClick("newsletter")}>
            <FontAwesomeIcon className={styles.icon} icon={faNewspaper} />
            Newsletter
          </a>
          <a href="#additional" onClick={() => handleLinkClick("additional")}>
            <FontAwesomeIcon className={styles.icon} icon={faBlog} />
            Additional
          </a>
          <input
            id={styles.logout}
            type="submit"
            value="Logout"
            onClick={handleLogout}
          />
        </div>


        <div className={styles.mainContent}>
          {selectedLink === "messages" && <Messages />}
          {selectedLink === "addBlog" && <AddBlog />}
          {selectedLink === "newsletter" && <Newsletter />}
          {selectedLink === "additional" && <Additional />}
        </div>
      </div>

  );
}

export default Admin