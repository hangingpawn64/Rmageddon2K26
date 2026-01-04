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
  {/* Bar 1 */}
  <div className="bar">
    <img src="/images/1.jpg" alt="" />
  </div>

  {/* Bar 2 */}
  <div className="bar">
    <img src="/images/3.jpg" alt="" />
  </div>

  {/* Bar 3 (DOUBLE WIDTH) */}
  <div className="bar bar-double">
    <img src="/images/middle2.png" alt="" />
  </div>

  {/* Bar 4 */}
  <div className="bar">
    <img src="/images/7.jpg" alt="" />
  </div>

  {/* Bar 5 */}
  <div className="bar">
    <img src="/images/9.png" alt="" />
  </div>
</div>

    </>
  );
}
