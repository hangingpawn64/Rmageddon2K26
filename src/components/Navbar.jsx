import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        {/* SVG BACKGROUND */}
        <div className="navbar-svg"></div>

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
                <NavLink to="/" end>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">
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
                <NavLink to="/accommodation">
                  ACCOMODATION
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* HAMBURGER (hamburger-react) */}
          <div className="hamburger-wrapper">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={26}
              color="#ffffff"
              duration={0.4}
              easing="ease-in-out"
            />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <ul className={`mobile-menu ${menuOpen ? "show" : ""}`}>
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
        <li>
          <NavLink to="/accommodation" onClick={closeMenu}>
            ACCOMODATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
