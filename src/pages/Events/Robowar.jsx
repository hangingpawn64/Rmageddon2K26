import { useEffect } from "react";
import "./Robowar.css";
import WarCarousel from "../../components/WarCarousel.jsx"
import GameCard from "../../components/Cards/GameCard";
import AnimatedButton from "../../components/AnimatedButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Robowar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const handleRegister = () => {
    // Add your registration link or logic here
    window.open('YOUR_REGISTRATION_LINK', '_blank');
  };

  const handleRuleBook = () => {
    // Add your rulebook link or logic here
    window.open('YOUR_RULEBOOK_LINK', '_blank');
  };

  return (
    <>
      {/* ================= ROBOWAR SECTION ================= */}
      <section className="robowar-container">
        <div className="robowar-left">
          <div className="robowar-header">
            <p className="robowar-title">ROBOWAR</p>
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1768074254/Group_514617166_ohluoe.png"
              alt="Robowar Title"
            />
          </div>

          <div className="robowar-content">
            <div className="robowar-content-top">
              <p>
                Enter the world of Robo Wars, where power meets precision,
                strategy, and innovation rules the battlefield
              </p>
            </div>

            <div className="robowar-content-bottom">
              <p>
                Last year, RoboWars made history as Marathwada's first RoboWars
                event. This year, the battlefield opens again your chance to test
                your robot, prove your skills, and make your mark.
              </p>
            </div>
          </div>

          <div className="robowar-buttons">
            <AnimatedButton text="R E G I S T E R" onClick={handleRegister} />
            <AnimatedButton text="R U L E  B O O K" onClick={handleRuleBook} />
          </div>
        </div>

        <div className="robowar-right">
          <div className="robowar-character">
            <img
              src="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766919193/image-removebg-preview_1_1_1_zfojwm.png"
              alt="Character"
            />
          </div>

          <div className="robowar-carousel">
            <WarCarousel />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="robowar-event-section robowar-bg-section-2">
        <div className="robowar-event-container">

          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Robo Soccer"
              description="Lead your robots to victory, score goals, and show off your skills in an action-packed Robo Soccer battle."
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767184498/images_fuqlhk.jpg"
            />
          </div>

          <div className="robowar-event-cards" data-aos="fade-left">
            <GameCard
              title="Robo Race"
              description="Unleash Speed, Strategy, and Skill! Push Your Robots to the Limit and Cross the Finish Line Victorious!"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767184498/images_fuqlhk.jpg"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 ================= */}
      <section className="robowar-event-section robowar-bg-section-3">
        <div className="robowar-event-container">
          <div className="robowar-event-cards" data-aos="fade-right">
            <GameCard
              title="Line Follower"
              description="Program Robot's to Follow the Path with Precision and Speed! Conquer the Line Following Challenge"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767184498/images_fuqlhk.jpg"
            />
          </div>

          <div className="robowar-event-cards" data-aos="fade-left">
            <GameCard
              title="Robo Sumo"
              description="Unleash your robots, push opponents out, and dominate the arena in Robo Sumo showdown!"
              image="https://res.cloudinary.com/dmbmdfmhl/image/upload/v1767184498/images_fuqlhk.jpg"
            />
          </div>
        </div>
      </section>

    </>
  );
};

export default Robowar;
