import "./App.css";
import bgImg from "./assets/img1.jpg";   // background image
import gtaArt from "./assets/char.png";  // character art
import logo from "./assets/rmageddon26.png"

// put steps OUTSIDE the component
const steps = [
  {
    stars: "★",
    title: "FILLING UP THE FORM",
    text: `PLEASE VISIT THE REGISTER BUTTON GIVEN IN EVENTS PAGE WHICH WILL
REDIRECT YOU TO UNSTOP. ON VISITING UNSTOP YOU SHOULD FILL ALL THE REQUIRED
DETAILS WITH ACCURATE INFORMATION BEFORE THE REGISTRATION DEADLINE. KINDLY
MAKE SURE TO SUBMIT THE REQUIRED FEE PAYMENT AS WELL.`
  },
  {
    stars: "★★",
    title: "VERIFYING DETAILS",
    text: `PLEASE VISIT THE REGISTER BUTTON GIVEN IN EVENTS PAGE WHICH WILL
REDIRECT YOU TO UNSTOP. ON VISITING UNSTOP YOU SHOULD FILL ALL THE REQUIRED
DETAILS WITH ACCURATE INFORMATION BEFORE THE REGISTRATION DEADLINE. KINDLY
MAKE SURE TO SUBMIT THE REQUIRED FEE PAYMENT AS WELL.`
  },
  {
    stars: "★★★",
    title: "ENTER THE COSMOS OF ROBOTICS",
    text: `PLEASE VISIT THE REGISTER BUTTON GIVEN IN EVENTS PAGE WHICH WILL
REDIRECT YOU TO UNSTOP. ON VISITING UNSTOP YOU SHOULD FILL ALL THE REQUIRED
DETAILS WITH ACCURATE INFORMATION BEFORE THE REGISTRATION DEADLINE. KINDLY
MAKE SURE TO SUBMIT THE REQUIRED FEE PAYMENT AS WELL.`
  }
];

function App() {
  return (<>
    <div
      className="hero"
      style={{ backgroundImage: `url(${bgImg})` }}>
    <a href="https://www.yoursite.com"  target="_blank" rel="noopener noreferrer"><img src={logo}   alt="logo" className="top-logo" /></a>

      <div className="hero-overlay">
        
        <div className="hero-left">
          <h1 className="hero-heading">
            <span>Steps to confirm your seat in</span>
            <br />
            <span className="hero-heading-main">RMAGEDDON 26</span>
           
          </h1>

          <div className="cards-column">
            {steps.map((step) => (
              <StepCard key={step.title} {...step} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – GTA ART */}
        <div className="hero-right">
          <img src={gtaArt} alt="RMAGEDDON artwork" className="hero-art" />
        </div>
      </div>
    </div>
    </>
  );
}

// separate component for each card
function StepCard({ stars, title, text }) {
  return (
    <div className="step-card">
      <div className="step-header">
        <div className="step-stars">
  {Array.from({ length: stars.length }).map((_, i) => (
    <span key={i} className="star-icon"></span>
  ))}
</div>
        <span className="step-title">{title}</span>
      </div>
      <p className="step-text">{text}</p>
    </div>
  );
}

export default App;
