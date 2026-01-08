import React from "react";
import "./Accommodation.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Accommodation = () => {
  return (
    <div>
      <div className="accom-bg">
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
          <Navbar />
        </div>
        <div className="accom-overlay"></div>
        <div className="accom-accommodation">ACCOMMODATION</div>
        <div className="accom-soon">COMING SOON</div>
        <div className="accom-left"> </div>
        <div className="accom-right"> </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
