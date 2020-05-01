import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    
  handleToggle = () => {
    const nav = document.querySelector(".my-nav-links");
    const navLinks = document.querySelectorAll(".my-nav-links li");

    nav.classList.toggle("my-nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  };

  render() {
    return (
      <nav className="my-navbar">
        <Link to="/">
          <img src={logo} className="my-logo" alt="hotel-logo" />
        </Link>
        <ul className="my-nav-links">
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
        <div className="my-burger">
          <button type="button" className="my-nav-btn" onClick={this.handleToggle}>
            <FaBars className="my-nav-icon" />
          </button>
        </div>
      </nav>
    );
  }
}
