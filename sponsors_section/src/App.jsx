import React from "react";
import "./App.css";
import VerticalSlider from "./component/VerticalSlider";
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
                <img src={exploreBtn} alt="Explore" />
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

          </div>
        </div>

        {/* RIGHT SIDE (VERTICAL SLIDER) */}
        <div className="sponsors-right">
          <img
            src={lineVectors}
            alt="vector line"
            aria-hidden="true"
            className="vector-line"
          />
          {/* {/* <div className="vertical-slider-wrapper"></div> */}
            <VerticalSlider />

      
        </div>

      </section>
    </div>
  );
}

export default App;


