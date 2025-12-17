import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const navItems = document.querySelectorAll(
      ".nav-links li, .mobile-menu li"
    );

    const toggleMenu = () => {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("show");
    };

    hamburger.addEventListener("click", toggleMenu);

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        mobileMenu.classList.remove("show");
        hamburger.classList.remove("is-active");
      });
    });

    return () => {
      hamburger.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
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
            <li className="active">HOME</li>
            <li>EVENTS</li>
          </ul>
        </div>

        {/* CENTER */}
        <div className="nav-center"></div>

        {/* RIGHT */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>ACCOMODATION</li>
            <li>CONTACT</li>
          </ul>
        </div>

        {/* HAMBURGER */}
        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <ul className="mobile-menu">
        <li className="active">HOME</li>
        <li>EVENTS</li>
        <li>ACCOMODATION</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
