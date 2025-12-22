import React from "react";
import "./App.css";
import VerticalSlider from "./component/VerticalSlider";
import Slider from "./component/Slider";
import exploreBtn from "./assets/exploreBtn.svg";
import lineVectors from "./assets/lineVectors.svg";

function App() {
  return (
    <div className="app-container">
      <section className="sponsors-section">

        {/* LEFT SIDE (WIDE) */}
        <div className="sponsors-left">

          <div className="left-upper">
            <div className="upper-head">
              <div className="title">
                <p>RNXG</p>
                <span className="Rnxg-underline"></span>
              </div>

              <a href="#explore" className="exploreBtn">
                <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766182828/Group_514617140_1_e6ri5g.png"} alt="Explore" />
              </a>
            </div>


            <div className="glass">
              <div className="desc"><p>Members of the RNXG, regardless of their fields, collaborate as a team to generate multidisciplinary technical expertise. Robotics for Next Generation, or RNXG, is the greatest platform for working on various issue statements and developing the best solutions for them.</p></div>
            </div>

          </div>

          <div className="left-down">
            <div className="down-head">

              <div className="title">
                <p>OUR SPONSOR</p>
                <span className="Spon-underline"></span>
              </div>

            </div>

            <div className="glass">
              <div className="desc"><p>Powered by our sponsors fueling innovation, robotic excellence, and the future of technology. for Next Generation, or RNXG, is the greatest platform for working on various issue statements and developing the best solutions for them.</p></div>
            </div>
            <div className="arrow">
              <img src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338541/Group_514617189_1_emshd0.png" alt="" />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (VERTICAL SLIDER) */}
        <div className="sponsors-right">
          <img
            src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766182940/Group_514617163_1_z4f8qx.png"}
            alt="vector line"
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
    </div>
  );
}

export default App;


