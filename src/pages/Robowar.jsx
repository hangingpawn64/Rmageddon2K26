import React from "react";
import "./Robowar.css";
import WarCarousel from "../components/WarCarousel"; // adjust path if needed

const Robowar = () => {
  return (
    <section className="robowar-container">
      {/* ================= LEFT SECTION ================= */}
      <div className="robowar-left">

        {/* Title */}
        <div className="robowarHeader">
          <p className="RoboTitle">ROBOWAR</p>
          <img
            src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766426168/Group_514617166_x6dsaa.png"
            alt="Robowar Title"
          />
        </div>

        {/* Content */}
        <div className="robowar-content">
          <div className="content-top">
            <p>
              Enter the world of Robo Wars, where power meets precision, strategy, and innovation rules the battlefield
            </p>
          </div>

          <div className="content-bottom">
            <p>
              Last year RoboWars created history as Marathwada's first-ever
              RoboWars event. This year, the battlefield is open again and it's
              your chance to step in. Whether you're a first-time builder or a
              seasoned team, RoboWar is the ultimate stage to test your robot,
              prove your skills, and make your mark.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="robowar-buttons">

          <div>
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766434804/Group_2_fd0ezd.png"
              alt="Register"
              className="robowar-btn"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766434800/Group_1_poqin9.png"
              alt="Rule Book"
              className="robowar-btn"
            />
          </div>

        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="robowar-right">

        {/* Character Image */}
        <div className="robowar-character">
          <img
            src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766919193/image-removebg-preview_1_1_1_zfojwm.png"
            alt="Character"
          />
        </div>

        {/* Carousel */}
        <div className="robowar-carousel">
          <WarCarousel />
        </div>
      </div>
    </section>
  );
};

export default Robowar;
