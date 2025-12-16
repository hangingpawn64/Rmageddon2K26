import React from "react";
import "./App.css";
import Slider from "./component/slider.jsx";

function App() {
  return (
    <div className="app-container">
      <section className="sponsors-section">

        {/* LEFT SIDE (WIDE) */}
        <div className="sponsors-left">
          <div className="glass-box">
            <h1 className="sponsor-title">OUR SPONSORS</h1>
            <p className="sponsor-desc">
              Powering Rmageddon 2K26 with innovation, robotics & technology.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (VERTICAL SLIDER) */}
        <div className="sponsors-right">
          <div className="vertical-slider-wrapper">
            <Slider />
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
