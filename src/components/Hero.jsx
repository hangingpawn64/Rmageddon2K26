import { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import leftHUD from "../assets/Group1.svg";
// import rightHUD from "../assets/Group2.svg";
// import driftCar from "../assets/drift-car3.png";
// import driftSmoke from "../assets/smoke.png";

import StepCard from "./StepCard";
import { steps } from "./StepsData";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const driftCarRef = useRef(null);
  const smokeRef = useRef(null);
  const staticCarRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;

    
    /* 📱 MOBILE + iPAD — STATIC ONLY */
    if (width <= 1024) {
      gsap.set(driftCarRef.current, { display: "none" });
      gsap.set(smokeRef.current, { display: "none" });

      gsap.set(staticCarRef.current, {
        opacity: 1,
        position: "relative",
        left: "auto",
        top: "auto",
        transform: "none",
      });

      gsap.set(contentRef.current, {
        opacity: 1,
        y: 0,
      });

      return;
    }

    /* 🖥️ DESKTOP — DRIFT ANIMATION */
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const driftCar = driftCarRef.current;
      const smoke = smokeRef.current;
      const staticCar = staticCarRef.current;

      const heroRect = hero.getBoundingClientRect();
      const carRect = driftCar.getBoundingClientRect();

      const RIGHT_GAP = 120;
      const START_X = -heroRect.width - carRect.width;
      const END_X = heroRect.width - carRect.width - RIGHT_GAP;

      /* RESET */
      gsap.set(driftCar, { x: START_X, rotation: 0, opacity: 1 });
      gsap.set(smoke, { x: START_X, opacity: 0 });
      gsap.set(staticCar, { opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, y: 30 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 70%",
          once: true,
        },
      });

      tl
        /* 🚗 DRIFT */
        .to(driftCar, {
          x: END_X,
          rotation: -14,
          duration: 1.6,
          ease: "power3.out",
        })
        .to(
          smoke,
          {
            x: END_X,
            opacity: 0.6,
            duration: 1.6,
            ease: "power3.out",
          },
          "<"
        )

        /* 💨 REMOVE SMOKE BEFORE STOP */
        .to(
          smoke,
          {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          "-=0.4"
        )

        /* 🛑 BRAKE */
        .to(driftCar, {
          x: END_X + 12,
          rotation: -4,
          duration: 0.18,
          ease: "power2.out",
        })
        .to(driftCar, {
          x: END_X,
          rotation: 0,
          duration: 0.22,
          ease: "power2.inOut",
        })

        /* ⏸ REST */
        .to({}, { duration: 0.5 })

        /* 📌 PLACE STATIC CAR */
        .add(() => {
          const driftRect = driftCar.getBoundingClientRect();
          const heroRectNow = hero.getBoundingClientRect();

          gsap.set(staticCar, {
            left: driftRect.left - heroRectNow.left,
            top: driftRect.top - heroRectNow.top,
            position: "absolute",
          });
        })

        /* 🔁 SWAP */
        .to(driftCar, { opacity: 0, duration: 0.01 })
        .to(staticCar, { opacity: 1, duration: 0.01 })

        /* 📄 CONTENT */
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero"
      style={{ backgroundImage: "url(./Images/bg-2.png)" }}
    >
      {/* DRIFT LAYER (DESKTOP ONLY) */}
      <div className="drift-layer">
        <img
          ref={driftCarRef}
          src={"/Images/drift-car3.png"}
          className="drift-car"
          alt="drift car"
        />
        <img
          ref={smokeRef}
          src={"/Images/smoke.png"}
          className="drift-smoke"
          alt="drift smoke"
        />
      </div>

      {/* STATIC CAR (ALL DEVICES) */}
      <img
        ref={staticCarRef}
        src={"/Images/drift-car3.png"}
        className="hero-car-static"
        alt="RMAGEDDON car"
      />

      {/* CONTENT */}
      <div ref={contentRef} className="hero-content">
        <div className="hud-container">
          <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group1_govmkw.png"} className="hud-svg hud-svg-left" alt="" />
          <h1 className="hud-title">
            <span className="hud-line-1">
              Steps to confirm your seat in
            </span>
            <span className="hud-line-2">
              RMAGEDDON 2026
            </span>
          </h1>
          <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group2_mxivzu.png"} className="hud-svg hud-svg-right" alt="" />
        </div>

        <div className="hero__overlay">
          <div className="hero__left">
            <div className="hero__cards">
              {steps.map(step => (
                <StepCard key={step.title} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
