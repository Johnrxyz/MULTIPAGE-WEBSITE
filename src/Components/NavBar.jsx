import React, { useState } from 'react';
import '../Styles/style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul className={`phonebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
          <li>
            <button className="link-like" onClick={hideSidebar}>
              CLOSE
            </button>
          </li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <ul className="topnav">
          <li className="hideOnMobile"><Link to="/">HOME</Link></li>
          <li className="hideOnMobile"><Link to="/about">ABOUT</Link></li>
          <li className="hideOnMobile"><Link to="/projects">PROJECTS</Link></li>
          <li className="hideOnMobile"><Link to="/contact">CONTACT</Link></li>
          <li className="menu-button">
            <button className="link-like" onClick={showSidebar}>
              JUMP THROUGH SECTION +
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
