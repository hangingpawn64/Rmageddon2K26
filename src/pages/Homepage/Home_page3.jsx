import {React, useEffect }from "react";
import "./Home_page3.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home_page3() {
        // Initialize AOS
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                mirror: true,
                easing: 'ease-in-out'
            });
            AOS.refresh();
        }, []);
  return (
    <div className="home3-bg">
      <div className="home3-overlay">
        <div className="home3-title" data-aos="fade-up" data-aos-delay="0">
          Discover Your Potential with Rmageddon
        </div>
        <div className="home3-container">
          <div className="home3-leftside">
            {/* TEXT + BG IMAGE */}
            <div className="home3-textbg" data-aos="fade-right" data-aos-delay="500">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766336885/Group_514617188_pvktop.png"
                alt="Rmageddon"
              />

              <div className="home3-content">
                <ul>
                  <li>Develop teamwork and creativity through GTA.</li>
                  <li>
                    Exceptional hands-on learning experience with designing,
                    building and complement your engineering curriculum.
                  </li>
                  <li>
                    Exciting Prizes, Certificates after completion and a ton of excitement.
                  </li>
                  <li>
                    By participating in the competition, familiarize yourself with SCI-FI realm.
                  </li>
                </ul>
              </div>
            </div>

            {/* MAIN IMAGE */}
            <div className="home3-leftimg" data-aos="fade-up" data-aos-delay="1200">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766339444/31-312191_grand-theft-auto-v-game-free-png-gta_2_urzmnt.png"
                alt="GTA"
              />
            </div>

          </div>


          <div className="home3-rightside">
            <div className="home3-right-up" data-aos="fade-down" data-aos-delay="800">
              <img
                src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766933652/ChatGPT_Image_Dec_28_2025_07_01_20_PM_1_u3hcr7.png"
                alt=""
              />
            </div>


            <div className="home3-right-low" data-aos="fade-left" data-aos-delay="1000">
              {/* CERTIFICATE */}
              <div className="home3-rightimg1">
                <img
                  src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338254/Group_514617172_fkwsyk.png"
                  alt=""
                />
                <div className="home3-right-text">
                  <div className="home3-innertext"><p>CASH PRIZES</p></div>
                  <div className="home3-subtext certificate">
                    <p>  Cash prize up to x lakh</p>
                  </div>
                </div>
              </div>

              {/* CASH PRIZE */}
              <div className="home3-rightimg2">
                <img
                  src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766338254/Group_514617172_fkwsyk.png"
                  alt=""
                />
                <div className="home3-right-text">
                  <div className="home3-innertext2"><p>Event Participation</p></div>
                  <div className="home3-subtext cash">
                    <p>Certificate to all participants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
