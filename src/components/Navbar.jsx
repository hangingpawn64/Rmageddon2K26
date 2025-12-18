import { useState } from "react";
import { NavLink, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* SVG BACKGROUND */}
        <div className="navbar-svg" />

        {/* CONTENT */}
        <div className="navbar-content">

          {/* LEFT */}
          <div className="nav-left">
            <img
              src="/src/assets/LeftLogo.png"
              className="left-logo"
              alt="logo"
            />

            <ul className="nav-links">
              <li>
                <NavLink to="/" end onClick={closeMenu}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" onClick={closeMenu}>
                  EVENTS
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CENTER */}
          <div className="nav-center" />

          {/* RIGHT */}
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/accommodation" onClick={closeMenu}>
                  ACCOMMODATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={closeMenu}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "is-active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <ul className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <li><NavLink to="/" end onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/events" onClick={closeMenu}>EVENTS</NavLink></li>
        <li><NavLink to="/accommodation" onClick={closeMenu}>ACCOMMODATION</NavLink></li>
        <li><NavLink to="/contact-us" onClick={closeMenu}>CONTACT</NavLink></li>
      </ul>
    </>
  );
};

export default Navbar;