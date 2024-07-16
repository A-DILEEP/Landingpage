import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiMenuKebab } from "react-icons/ci";
import "./navbar.css";
const Navbar = () => {
  const [isopen, Setisopen] = useState(false);
  const togglemenu = () => {
    Setisopen(!isopen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Nexcent</h2>
      </div>
      <div className="items">
        <ul className={`navbar-items ${isopen ? "mobile" : ""}`}>
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
      <button className="menu-toggle" onClick={togglemenu}>
        {isopen ? (
          <span>
            <RxHamburgerMenu color="black" />
          </span>
        ) : (
          <span>
            <CiMenuKebab color="black" />
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
