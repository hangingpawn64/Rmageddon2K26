import "./Hero.css";
import bgImg from "../assets/img1.jpg";
import gtaArt from "../assets/char.png";
import Logo from "./Logo";
import StepCard from "./Stepcard";
import { steps } from "./StepsData";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Logo />

      <div className="hero__overlay">
        <div className="hero__left">
          <h1 className="hero__heading">
            Steps to confirm your seat in{" "}
            <span className="hero__heading-main">RMAGEDDON 26</span>
          </h1>

          <div className="hero__cards">
            {steps.map(step => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>

        <div className="hero__right">
          <img src={gtaArt} alt="Artwork" className="hero__art" />
        </div>
      </div>
    </section>
  );
}
