import React from "react";
import "./Accommodation.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Accommodation = () => {
  return (
    <div>
      <div className="bg">
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
          <Navbar />
        </div>
        <div className="overlay"></div>
        <div className="accommodation">ACCOMMODATION</div>
        <div className="soon">COMING SOON</div>
        <div className="left"> </div>
        <div className="right"> </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
