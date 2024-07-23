import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import "./navbar.css";
const Navbar = () => {

  return (
    <section>
      <nav className="navbar">
        <div className="logo">
          <h2>Nexcent</h2>
        </div>
        <div className="items">
          <ul className="navbar-items">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#features">FEATURES</a>
            </li>
            <li>
              <a href="#community">COMMUNITY</a>
            </li>
            <li>
              <a href="#blog"> BLOG</a>
            </li>
            <li>
              <a href="#pricing">PRICING</a>
            </li>
          </ul>
          <button className="register">
            Register Now <FaArrowRightLong />{" "}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
