import { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import leftHUD from "../assets/Group1.svg";
// import rightHUD from "../assets/Group2.svg";
// import driftCar from "../assets/drift-car3.png";
// import driftSmoke from "../assets/smoke.png";

import StepCard from "../../components/Stepcard";
import { steps } from "../../components/StepsData";

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
        display: "none",
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
          start: "top 80%",
          once: true,
        },
      });

      tl
        /* 🚗 DRIFT */
        /* 🚗 DRIFT */
        .to(driftCar, {
          x: END_X,
          rotation: -14,
          duration: 2.0,
          ease: "power3.out",
        })
        .to(
          smoke,
          {
            x: END_X,
            opacity: 0.6,
            duration: 2.0,
            ease: "power3.out",
          },
          "<"
        )

        /* 🛑 BRAKE / SETTLE */
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

        /* 💨 NOW fade smoke AFTER drift is fully complete */
        .to(smoke, {
          opacity: 0,
          duration: 0.8,   // 👈 smooth disappear
          ease: "power2.out",
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
          duration: 0.1,
          ease: "power2.out",
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section"
      style={{ backgroundImage: "url(https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767522231/bg-2_pnpmsf.png)" }}
    >
      {/* DRIFT LAYER (DESKTOP ONLY) */}
      <div className="hero-drift-layer">
        <img
          ref={driftCarRef}
          src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767531265/drift-car3_1_krzame.png"}
          className="hero-drift-car"
          alt="drift car"
        />
        <img
          ref={smokeRef}
          src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767522192/smoke_acjrc5.png"}
          className="hero-drift-smoke"
          alt="drift smoke"
        />
      </div>

      {/* STATIC CAR (ALL DEVICES) */}
      <img
        ref={staticCarRef}
        src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767531265/drift-car3_1_krzame.png"}
        className="hero-static-car"
        alt="RMAGEDDON car"
      />

      {/* CONTENT */}
      <div ref={contentRef} className="hero-section-content">
        <div className="hero-hud-container">
          <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group1_govmkw.png"} className="hero-hud-svg hero-hud-svg-left" alt="" />
          <h1 className="hero-hud-title">
            <span className="hero-hud-line-1">
              Steps to confirm your seat in
            </span>
            <span className="hero-hud-line-2">
              RMAGEDDON 2026
            </span>
          </h1>
          <img src={"https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766329420/Group2_mxivzu.png"} className="hero-hud-svg hero-hud-svg-right" alt="" />
        </div>

        <div className="hero-overlay">
          <div className="hero-left">
            <div className="hero-cards">
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