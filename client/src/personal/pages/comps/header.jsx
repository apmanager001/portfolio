import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import DarkMode from '../../../portfolio/darkmode/DarkMode'



const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex justify-around items-center w-full p-2'>
      <div className='flex justify-center items-center w-60 pl-5'>
        <Link className='no-underline' to="/">
          <h1 className="text-3xl">Robert Foley</h1>
        </Link>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <DarkMode />
        <div className='hidden md:flex items-center gap-3'>
          <>
            
            <Link to="/me">
              <h3 >Me</h3>
            </Link>
            <Link to="/portfolio">
              <h3 >Portfolio</h3>
            </Link>
            <Link to="/blog">
              <h3 >Blog</h3>
            </Link>
            <Link to="/photography">
              <h3 >Photography</h3>
            </Link>
            <Link to="/contact">
              <h3 >Contact</h3>
            </Link>
          </>
        </div>
        <div className='w-full flex justify-end items-center'>
          <div
            className={`flex mr-6 text-2xl md:mr-0 md:hidden ${
              isMenuOpen ? 'block' : ""
            }`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        {isMenuOpen && (
          <div className='flex flex-col items-center absolute top-12 right-0 gap-3 w-52 z-10 bg-slate-700 md:hidden'>
            <>
              <Link onClick={toggleMenu} to="/me">
                Me
              </Link>
              <Link onClick={toggleMenu} to="/portfolio">
                Portfolio
              </Link>
              <Link onClick={toggleMenu} to="/blog">
                Blog
              </Link>
              <Link onClick={toggleMenu} to="/photography">
                Photography
              </Link>
              <Link onClick={toggleMenu} to="/contact">
                Contact
              </Link>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
