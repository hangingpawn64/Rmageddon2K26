import React from "react";
import "./SponsorSection.css"; // keep styles same
import VerticalSlider from "./VerticalSlider";
import Slider from "./Slider";

const SponsorSection = () => {
  return (
    <section className="sponsors-section">
      {/* LEFT SIDE */}
      <div className="sponsors-left">
        <div className="left-upper">
          <div className="upper-head">
            <div className="title">
              <p>RNXG</p>
              <span className="Rnxg-underline"></span>
            </div>

            <a href="#explore" className="exploreBtn">
              <img
                src="/Images/exploreBtn.svg"
                alt="Explore"
              />
            </a>
          </div>

          <div className="glass">
            <div className="desc">
              <p>
                Members of the RNXG, regardless of their fields, collaborate as a
                team to generate multidisciplinary technical expertise.
                Robotics for Next Generation, or RNXG, is the greatest platform
                for working on various issue statements and developing the best
                solutions for them.
              </p>
            </div>
          </div>
        </div>

        <div className="left-down">
          <div className="down-head">
            <div className="title">
              <p>OUR SPONSORS</p>
              <span className="Spon-underline"></span>
            </div>
          </div>

          <div className="glass">
            <div className="desc">
              <p>
                Powered by our sponsors fueling innovation, robotic excellence,
                and the future of technology. for Next Generation, or RNXG, is
                the greatest platform for working on various issue statements
                and developing the best solutions for them.
              </p>
            </div>
          </div>

          <div className="arrow">
            <img
              src="/Images/arrow.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="sponsors-right">
        <img
          src="/Images/lineVectors.svg"
          alt=""
          aria-hidden="true"
          className="vector-line"
        />

        {/* Desktop */}
        <div className="slider-vertical">
          <VerticalSlider />
        </div>

        {/* Mobile */}
        <div className="slider-horizontal">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
