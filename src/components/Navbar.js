import React, { useState } from "react";
import { Link } from "gatsby";
import discord from "../img/social/discord.svg";
import logo from "../../static/img/diablo-immortal-logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "auto" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-end has-text-centered">
            <div className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </div>
            <div className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/blog">
                News
              </Link>
            </div>
            <a
              className="navbar-item"
              href="https://discord.gg/JkC2tVAQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={discord} alt="Discord" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
