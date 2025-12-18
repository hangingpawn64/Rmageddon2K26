import "./Hero.css";
import bgImg from "../assets/bg2.jpeg";
import gtaArt from "../assets/char.png";
import leftHUD from "../assets/Group1.svg";
import rightHUD from "../assets/Group2.svg";
import StepCard from "./StepCard";
import { steps } from "./StepsData";


export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
     
      {/* HUD TITLE */}
    {/* HUD TITLE BLOCK */}
<div className="hud-container">
  <img src={leftHUD} alt="" className="hud-svg hud-svg-left" />

  <h1 className="hud-title hud-fade-in">
    <span className="hud-line-1">
      Steps to confirm your seat in
    </span>
    <span className="hud-line-2">
      RMAGEDDON 26
    </span>
  </h1>

  <img src={rightHUD} alt="" className="hud-svg hud-svg-right" />
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
    </section>
  );
}
