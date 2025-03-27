import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button aria-label="Toggle dark mode" className="toggle">
              🌙
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
