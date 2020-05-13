import React from "react";
import logo from "../images/logo-white.png";
import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
          <div>
        <img src={logo} alt="logo" className="footer-logo" />
      </div>
      <div className="footer-links-div">
        <ul className="footer-navlinks">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/login">ABOUT</Link>
          </li>
          <li>
            <Link to="/activities">ACTIVITIES</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="footer-icons">
        <ul>
          <li>
            <FaFacebookF className="footer-icon" />
          </li>
          <li>
            <FaInstagram className="footer-icon" />
          </li>
          <li>
            <FaTwitter className="footer-icon" />
          </li>
          <li>
            <FaLinkedinIn className="footer-icon" />
          </li>
          <li>
            <FaYoutube className="footer-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
