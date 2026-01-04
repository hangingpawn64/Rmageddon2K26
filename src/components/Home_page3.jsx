import React, { useEffect } from "react";
import "./Home_page3.css";

export default function Home_page3() {

  /* TAP SUPPORT FOR MOBILE & IPAD */
  useEffect(() => {
    const frames = document.querySelectorAll(".hud-frame");

    frames.forEach(frame => {
      frame.addEventListener("click", () => {
        frame.classList.remove("active");
        void frame.offsetWidth; // force reflow
        frame.classList.add("active");

        setTimeout(() => {
          frame.classList.remove("active");
        }, 700);
      });
    });
  }, []);

  return (
    <section className="home3">
      <div className="home3-overlay" />

      {/* TITLE */}
      <h1 className="home3-title">
        DISCOVER YOUR POTENTIAL WITH RMAGEDDON
      </h1>

      {/* GRID */}
      <div className="home3-grid">

        {/* LEFT SECTION */}
        <div className="home3-left">

          {/* LEFT SVG + TEXT */}
          <div className="left-svg-wrap">
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766336885/Group_514617188_pvktop.png"
              alt=""
            />

            <div className="left-content-fix">
              <ul className="left-content">
                <li>Develop teamwork and creativity through GTA.</li>
                <li>
                  Exceptional hands-on learning experience with designing,
                  building and complement your engineering curriculum.
                </li>
                <li>
                  Exciting prizes, certificates after completion and a ton of excitement.
                </li>
                <li>
                  By participating in the competition, familiarize yourself with the SCI-FI realm.
                </li>
              </ul>
            </div>
          </div>

          {/* LEFT CHARACTER */}
          <div className="left-character-wrap">
            <img
              className="left-character"
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766339444/31-312191_grand-theft-auto-v-game-free-png-gta_2_urzmnt.png"
              alt=""
            />
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="home3-right">

          {/* RIGHT CHARACTER */}
          <div className="right-character-wrap">
            <img
              className="right-hero"
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766933652/ChatGPT_Image_Dec_28_2025_07_01_20_PM_1_u3hcr7.png"
              alt=""
            />
          </div>

          {/* HUD STACK */}
          <div className="hud-stack">

            {/* CASH PRIZES */}
            <div className="hud-frame">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338254/Group_514617172_fkwsyk.png"
                alt=""
              />
              <div
                className="hud-text"
                data-text="CASH PRIZES"
              >
                CASH PRIZES
              </div>
            </div>

            {/* CERTIFICATE */}
            <div className="hud-frame">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338254/Group_514617172_fkwsyk.png"
                alt=""
              />
              <div
                className="hud-text"
                data-text="CERTIFICATE OF PARTICIPATION"
              >
                CERTIFICATE OF PARTICIPATION
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
