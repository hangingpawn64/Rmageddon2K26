import { useState } from 'react';
import footerBg from '../assets/FOOTER 71.png';
import Socials from './Socials';
import EnquiryForm from './EnquiryForm';

const Footer = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (

    <footer className="relative w-full min-h-[35vh] h-auto overflow-hidden text-white  ">
      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={footerBg} alt="Footer Background" className="w-full h-full object-cover object-center" />
      </div>

      {/* Main Content Container with Border */}
      <div className="footer-border-container relative z-10 h-full flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-4 sm:my-6">
        <div className="relative h-full flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-10 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 ">

          {/* Top Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 px-2 sm:px-4 w-full">
            {/* Enquiry Button */}
            <div className="flex-1 flex justify-center sm:justify-start w-full sm:w-auto">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-white/5 backdrop-blur-md border-2 border-white/30 text-white px-6 sm:px-7 md:px-8 py-2 sm:py-2.5 text-sm sm:text-base rounded-md hover:bg-white/15 hover:border-white/50 hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(255,255,255,0.2)] transition-all duration-300 font-bold"
              >
                Enquiry
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex justify-center w-full sm:w-auto order-first sm:order-0 mb-4 sm:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-[48px] font-ethnocentric tracking-widest[0.1em] drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] text-center">
                RNXG
              </h1>
            </div>

            {/* Social Icons */}
            <div className="flex-1 flex justify-center sm:justify-end w-full sm:w-auto">
              <Socials />
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 py-3 sm:py-4">

            {/* Description */}
            <div className="text-center max-w-xl lg:max-w-2xl z-10">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-white drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] font-normal font-saira">
                Robotics for Next Generation provides the best<br className="hidden sm:block" />
                platform to work on different problem statements and<br className="hidden sm:block" />
                to create the best solutions for them.
              </p>
            </div>

            {/* Scroll to Top Button */}
            <button onClick={scrollToTop}
              className="absolute right-6 sm:right-8 md:right-10 bottom-4 sm:bottom-6 w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white text-base sm:text-lg flex items-center justify-center hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 font-bold sm:gap-4 px-4 sm:px-8 py-3 sm:py-4 border-t border-white/20 text-[14px] sm:text-[16px] md:text-[18px] text-white/80 font-saira">
            <div className="flex-1 text-center sm:text-left">
              <p className="m-0">Copyright © 2026 RNXG. All Rights Reserved</p>
            </div>
            <div className="flex-1 text-center sm:block">
              <p className="m-0">Designed and Developed by Team RNXG.</p>
            </div>
            <div className="flex-1 text-center sm:text-right">
              <a href="mailto:info@rmageddon2025.tech" className="text-white/90 underline hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300">
                info@rmageddon2026.tech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


