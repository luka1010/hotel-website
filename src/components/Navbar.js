import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    
  handleToggle = () => {
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-active");
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
      <nav>
        <Link to="/">
          <img src={logo} className="logo" alt="hotel-logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/activities">Activities</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <div className="burger">
          <button type="button" className="nav-btn" onClick={this.handleToggle}>
            <FaBars className="nav-icon" />
          </button>
        </div>
      </nav>
    );
  }
}
