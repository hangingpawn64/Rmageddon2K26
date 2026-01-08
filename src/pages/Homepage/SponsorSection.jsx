import React from "react";
import "./SponsorSection.css"; // keep styles same
import VerticalSlider from "../../components/VerticalSlider";
import Slider from "../../components/Slider";

const SponsorSection = () => {
  return (
    <section className="sponsor-section-container">
      {/* LEFT SIDE */}
      <div className="sponsor-section-left">
        <div className="sponsor-section-left-upper">
          <div className="sponsor-section-upper-head">
            <div className="sponsor-section-title">
              <p>RNXG</p>
              <span className="sponsor-section-rnxg-underline"></span>
            </div>

            <a href="#explore" className="sponsor-section-exploreBtn">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766182828/Group_514617140_1_e6ri5g.png"
                alt="Explore"
              />
            </a>
          </div>

          <div className="sponsor-section-glass">
            <div className="sponsor-section-desc">
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

        <div className="sponsor-section-left-down">
          <div className="sponsor-section-down-head">
            <div className="sponsor-section-title">
              <p>OUR SPONSOR</p>
              <span className="sponsor-section-spon-underline"></span>
            </div>
          </div>

          <div className="sponsor-section-glass">
            <div className="sponsor-section-desc">
              <p>
                Powered by our sponsors fueling innovation, robotic excellence,
                and the future of technology. for Next Generation, or RNXG, is
                the greatest platform for working on various issue statements
                and developing the best solutions for them.
              </p>
            </div>
          </div>

          <div className="sponsor-section-arrow">
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338541/Group_514617189_1_emshd0.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="sponsor-section-right">
        <img
          src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766182940/Group_514617163_1_z4f8qx.png"
          alt=""
          aria-hidden="true"
          className="sponsor-section-vector-line"
        />

        {/* Desktop */}
        <div className="sponsor-section-slider-vertical">
          <VerticalSlider />
        </div>

        {/* Mobile */}
        <div className="sponsor-section-slider-horizontal">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
