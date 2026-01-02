import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./PageLoader.css";

export default function PageLoader({ onComplete }) {
  const hasStarted = useRef(false);

  useEffect(() => {
    // 🛑 Prevent double execution in React StrictMode
    if (hasStarted.current) return;
    hasStarted.current = true;

    const counter = document.querySelector(".counter");

    /* =============================
       PERFECT ORDERED COUNTER
    ============================== */
    const duration = 3500; // must match loader fade timing
    const startTime = performance.now();

    function updateCounter(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * 100);

      counter.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = 100; // hard clamp
      }
    }

    requestAnimationFrame(updateCounter);

    /* =============================
       GSAP ANIMATIONS (UNCHANGED)
    ============================== */

    gsap.to(".counter", {
      delay: 3.5,
      opacity: 0,
      duration: 0.25,
    });

    gsap.to(".bar img", {
      opacity: 1,
      duration: 0.8,
      stagger: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(".overlay", {
      delay: 3.5,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete,
    });

  }, [onComplete]);

  return (
    <>
      <h1 className="counter">0</h1>

      <div className="overlay">
        {["1.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "9.png"].map((img, i) => (
          <div className="bar" key={i}>
            {/* ✅ Vite public path */}
            <img src={`/public/images/${img}`} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
