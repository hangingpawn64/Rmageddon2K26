import "./Hero.css";
// import bgImg from "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329715/bg2_zf4qjo.jpg";
import gtaArt from "../assets/char.png";
import leftHUD from "../assets/Group1.svg";
import rightHUD from "../assets/Group2.svg";
import StepCard from "./StepCard";
import { steps } from "./StepsData";
import Navbar from "./Navbar";



export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329715/bg2_zf4qjo.jpg)` }}
    >
     
      {/* HUD TITLE */}
    {/* HUD TITLE BLOCK */}
    
<div className="hud-container">
  <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group1_govmkw.png"} alt="" className="hud-svg hud-svg-left" />

  <h1 className="hud-title hud-fade-in">
    <span className="hud-line-1">
      Steps to confirm your seat in
    </span>
    <span className="hud-line-2">
      RMAGEDDON 2026
    </span>
  </h1>

  <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group2_mxivzu.png"} alt="" className="hud-svg hud-svg-right" />
</div>


      {/* MAIN CONTENT */}
      <div className="hero__overlay">
        <div className="hero__left">
          <div className="hero__cards">
            {steps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>

        <div className="hero__right">
          <img
            src={gtaArt}
            alt="RMAGEDDON character"
            className="hero__art"
          />
        </div>
      </div>
      {/* <Carousel/> */}

    </section>
  );
}
