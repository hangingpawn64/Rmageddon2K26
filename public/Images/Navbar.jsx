import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isEventsPage = location.pathname === "/events";
  const closeMenu = () => setMenuOpen(false);

  /* ✅ CLOSE MENU ON ROUTE CHANGE (IMPORTANT) */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /* 🔒 SCROLL LOCK — SAFE & REVERSIBLE */
  useEffect(() => {
  if (menuOpen) {
    document.body.classList.add("nav-scroll-locked");
  } else {
    document.body.classList.remove("nav-scroll-locked");
  }

  return () => {
    document.body.classList.remove("nav-scroll-locked");
  };
}, [menuOpen]);

// 🔥 FORCE MENU CLOSE ON ROUTE CHANGE
useEffect(() => {
  setMenuOpen(false);
}, [location.pathname]);


  return (
    <>
      <nav className={`navbar ${isEventsPage ? "events-mode" : ""}`}>
        {/* SVG BACKGROUNDS */}
        <div className="navbar-svg-wrapper">
          <div
            className={`navbar-svg default-svg ${
              isEventsPage ? "hidden" : "visible"
            }`}
          />
          <div
            className={`navbar-svg events-svg ${
              isEventsPage ? "visible" : "hidden"
            }`}
          />
        </div>

        {/* CONTENT */}
        <div className="navbar-content">
          <img
            src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/LeftLogo_v7tgve.png"
            className="left-logo"
            alt="logo"
          />

          <div className="nav-left">
            <ul className="nav-links">
              <li>
                <NavLink to="/" end>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">EVENTS</NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-center" />

          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/accommodation">ACCOMODATION</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger-wrapper">
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
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <ul
            className="mobile-menu show"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ CLOSE BUTTON */}
            <button
              className="mobile-menu-close"
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
