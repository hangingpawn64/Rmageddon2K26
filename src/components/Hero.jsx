import "./Hero.css";
import bgImg from "../assets/bg.png";
import gtaArt from "../assets/char.png";
import Logo from "./Logo";
import StepCard from "./StepCard"; // ✅ correct casing
import { steps } from "./StepsData";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* TOP-RIGHT LOGO */}
      {/* <Logo /> */}

      {/* HUD TITLE */}
 <h1 className="hud-title">
  <span className="hud-line-1">
    Steps to confirm your seat in
  </span>

  <span className="hud-line-2">
    RMAGEDDON 26
    <span className="hud-connector"></span>
  </span>
</h1>



      {/* MAIN CONTENT */}
      <div className="hero__overlay">
        {/* LEFT SIDE – CARDS */}
        <div className="hero__left">
          <div className="hero__cards">
            {steps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – CHARACTER */}
        <div className="hero__right">
          <img
            src={gtaArt}
            alt="RMAGEDDON Character"
            className="hero__art"
          />
        </div>
      </div>
    </section>
  );
}
