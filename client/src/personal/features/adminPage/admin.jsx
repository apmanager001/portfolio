import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/userContext';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faBlog, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Messages from './comps/messages';
import AddBlog from './comps/addBlog';
import Newsletter from './comps/newsletter'

const Admin = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [selectedLink, setSelectedLink] = useState("messages");

    useEffect(() => {

      if (!user) {
        navigate("/login");
      }
    }, [navigate, user]);

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
    <div className="flex flex-col items-center min-h-screen">
      <div
        role="tablist"
        className="tabs tabs-boxed min-w-96 flex justify-center items-center"
      >
        <a
          href="#messages"
          role="tab"
          className={`tab ${selectedLink === "messages" ? "tab-active" : ""}`}
          onClick={() => handleLinkClick("messages")}
        >
          <FontAwesomeIcon className="pr-1" icon={faMessage} />
          Messages
        </a>
        <a
          href="#addBlog"
          role="tab"
          className={`tab ${selectedLink === "addBlog" ? "tab-active" : ""}`}
          onClick={() => handleLinkClick("addBlog")}
        >
          <FontAwesomeIcon className="pr-1" icon={faBlog} />
          Add Blogs
        </a>
        <a
          href="#newsletter"
          role="tab"
          className={`tab ${selectedLink === "newsletter" ? "tab-active" : ""}`}
          onClick={() => handleLinkClick("newsletter")}
        >
          <FontAwesomeIcon className="pr-1" icon={faNewspaper} />
          Newsletter
        </a>
        <a
          href="#additional"
          role="tab"
          className={`tab ${selectedLink === "additional" ? "tab-active" : ""}`}
          onClick={() => handleLinkClick("additional")}
        >
          <FontAwesomeIcon className="pr-1" icon={faBlog} />
          Additional
        </a>
        <input
          className="btn btn-accent"
          type="submit"
          value="Logout"
          onClick={handleLogout}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {selectedLink === "messages" && <Messages />}
        {selectedLink === "addBlog" && <AddBlog />}
        {selectedLink === "newsletter" && <Newsletter />}
        {selectedLink === "additional" && <Additional />}
      </div>
    </div>
  );
}

export default Admin