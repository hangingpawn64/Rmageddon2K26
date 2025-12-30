import React from "react";
import "./Home_page3.css";

export default function Home_page3() {
  return (
    <div className="home3-bg">
      <div className="home3-overlay">
        <div className="home3-title">
          Discover Your Potential with Rmageddon
        </div>
        <div className="home3-container">
          <div className="home3-leftside">
            <div className="home3-textbg">
              <img
                src="/Images/textbg.png"
                alt="Rmageddon"
              />
            </div>

            <div className="home3-content">
              <ul>
                <li>
                  Develop teamwork and creativity through GTA.
                </li>
                <li>
                  Exceptional hands-on learning experience with designing,
                  building and complement your engineering curriculum.
                </li>
                <li>
                  Exciting Prizes,Certificates after completion and a ton of
                  excitement.
                </li>
                <li>
                  By participating in the competition, familiarize yourself
                  with SCI-FI realm.
                </li>
              </ul>
            </div>

            <div className="home3-leftimg">
              <img
                src="/Images/page3_left.png"
                alt=""
              />
            </div>
          </div>

          <div className="home3-rightside">
            <div className="home3-image">
              <img
                src="/Images/image.png"
                alt=""
              />
            </div>

            <div className="home3-rightimg">
              <img
                src="/Images/box.png"
                alt=""
              />
            </div>

            <div className="home3-innertext">
              CERTIFICATE OF PARTICIPATION
            </div>

            <div className="home3-rightimg2">
              <img
                src="/Images/box.png"
                alt=""
              />
            </div>

            <div className="home3-innertext2">
              CASH PRIZES
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
