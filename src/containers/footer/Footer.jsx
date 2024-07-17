import React from "react";
import "./footer.css";
import { SiInstagram } from "react-icons/si";
import { FaDribbble } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-heading">
          <p>
            Pellentesque suscipit <br /> fringilla libero eu.
          </p>
        </div>
        <div className="getADemo">
          <button>Get a Demo</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-nexcent">
          <div className="footer-bottom-nexcent-heading">Nexcent</div>
          <div className="footer-bottom-nexcent-minText">
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          <div className="footer-bottom-nexcent-icons">
            <button className="icon-btn">
              <SiInstagram />
            </button>
            <button className="icon-btn">
              <FaDribbble />
            </button>
            <button className="icon-btn">
              <SlSocialTwitter />
            </button>
            <button className="icon-btn">
              <AiOutlineYoutube />
            </button>
          </div>
        </div>
        <div className="footer-bottom-company">
          <div className="footer-bottom-company-heading">Company</div>
          <div className="footer-bottom-company-links">
            <p>
              <a href="About Us">About Us</a>
            </p>
            <p>
              <a href="Blog">Blog</a>
            </p>
            <p>
              <a href="Contact Us">Contact Us</a>
            </p>
            <p>
              <a href="Pricing">Pricing</a>
            </p>
            <p>
              <a href="Testimonials">Testimonials</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom-support">
          <div className="footer-bottom-support-heading">Support</div>
          <div className="footer-bottom-support-links">
            <p>
              <a href="Help center">Help center</a>
            </p>
            <p>
              <a href="Terms of service">Terms of service</a>
            </p>
            <p>
              <a href="Legal">Legal</a>
            </p>
            <p>
              <a href="Privacy policy">Privacy policy</a>
            </p>
            <p>
              <a href="Status">Status</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom-stayUpTwoDate">
          <div className="footer-bottom-stayUpTwoDate-heading">
            Stay up to date
          </div>
          <div className="footer-bottom-input">
            <input type="email" placeholder="Your Email Address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
