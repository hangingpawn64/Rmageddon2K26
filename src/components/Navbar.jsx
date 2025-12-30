import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isEventsPage = location.pathname === "/events";

  const closeMenu = () => setMenuOpen(false);

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
          {/* LEFT LOGO (FIXED) */}
          <img
            src="/src/assets/LeftLogo.png"
            className="left-logo"
            alt="logo"
          />

          {/* LEFT LINKS */}
          <div className="nav-left">
            <ul className="nav-links">
              <li>
                <NavLink to="/" end onClick={closeMenu}>
                  HOME
                </NavLink>
              </li>
              <li>
              <NavLink
  to="/events"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  EVENTS
</NavLink>

              </li>
            </ul>
          </div>

          {/* CENTER (SVG HOLDER ONLY) */}
          <div className="nav-center" />

          {/* RIGHT LINKS */}
          <div className="nav-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/accommodation" onClick={closeMenu}>
                  ACCOMODATION
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

      {/* MOBILE MENU */}
     <ul className={`mobile-menu ${menuOpen ? "show" : ""}`}>
  <li>
    <NavLink
      to="/"
      end
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}
    >
      HOME
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/events"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}
    >
      EVENTS
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/accommodation"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}
    >
      ACCOMODATION
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact-us"
      className={({ isActive }) => (isActive ? "active" : "")}
      onClick={closeMenu}
    >
      CONTACT
    </NavLink>
  </li>
</ul>

    </>
  );
};

export default Navbar;