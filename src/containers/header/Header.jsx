import React from "react";
import "./header.css";
import img0 from '../../assets/img0.png'
const Header = () => {
  return (
    <section>
      <div className="header" id="home">
        <div className="content">
          <div className="bigcontent">
            Lessons and insights <br />
            <span>from 8 years</span>
          </div>
          <div className="mincontent">
            Where to grow your business as a photographer: site or social media?
          </div>
          <button className="registerbtn">Register</button>
        </div>
        <div className="image">
          <img src={img0} alt="error" />
        </div>
      </div>
    </section>
  );
};

export default Header;
