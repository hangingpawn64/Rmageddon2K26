import { useEffect } from "react";
import "./Accommodation.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Accommodation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div>
      <div className="accom-bg">
        <div className="absolute top-0 left-0 w-full z-50 flex justify-center">
          <Navbar />
        </div>
        <div className="accom-overlay"></div>
        <div className="accom-accommodation">ACCOMMODATION</div>
        <div className="accom-soon">COMING SOON</div>
        <div className="accom-left" data-aos="fade-right"> </div>
        <div className="accom-right" data-aos="fade-left"> </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accommodation;
