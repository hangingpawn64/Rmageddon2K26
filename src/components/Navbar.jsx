import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isEventsPage = location.pathname === "/events";

  const closeMenu = () => setMenuOpen(false);

  /* ✅ CLOSE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* ✅ SCROLL LOCK WHEN MENU OPEN */
  useEffect(() => {
    document.body.classList.toggle("navbar-scroll-locked", menuOpen);
    return () => document.body.classList.remove("navbar-scroll-locked");
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar-container ${isEventsPage ? "navbar-events-mode" : ""}`}>
        {/* SVG BACKGROUNDS */}
        <div className="navbar-svg-wrapper">
          <div
            className={`navbar-bg-svg navbar-default-bg ${isEventsPage ? "navbar-hidden" : "navbar-visible"
              }`}
          />
          <div
            className={`navbar-bg-svg navbar-events-bg ${isEventsPage ? "navbar-visible" : "navbar-hidden"
              }`}
          />
        </div>

        {/* CONTENT */}
        <div className="navbar-content-wrapper">
          <img
            src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768055060/rnxg_logo_oimsz0.png"
            className="navbar-logo"
            alt="logo"
          />

          <div className="navbar-links-left">
            <ul className="navbar-links-list">
              <li><NavLink to="/" end>HOME</NavLink></li>
              <li><NavLink to="/events">EVENTS</NavLink></li>
            </ul>
          </div>

          <div className="navbar-center" />

          <div className="navbar-links-right">
            <ul className="navbar-links-list">
              <li><NavLink to="/accommodation">ACCOMODATION</NavLink></li>
              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </div>

          {/* HAMBURGER */}
          <div className="navbar-hamburger-wrapper">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              size={26}
              color="#ffffff"
              duration={0.45}
              easing="ease-in-out"
            />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="navbar-mobile-menu-overlay" onClick={closeMenu}>
          <ul
            className="navbar-mobile-menu navbar-show"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="navbar-mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>

            {[
              ["/", "HOME"],
              ["/events", "EVENTS"],
              ["/accommodation", "ACCOMODATION"],
              ["/contact", "CONTACT"],
            ].map(([path, label]) => (
              <li key={path}>
                <NavLink to={path} onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
