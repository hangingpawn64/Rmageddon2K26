// HorizontalSlider.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./WarCarousel.css"; // namespaced CSS shown below

const HorizontalSlider = ({ className = "" }) => {
  const slides = [
    { image: "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg" },
    { image: "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg" },
    { image: "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg" },
    { image: "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`war-carousel-images-slider ${className}`}>
      <Swiper
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={1}                 // you said you want only 1 per view
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        observer={true}
        observeParents={true}
        nested={true}
        modules={[Autoplay]}
        className="war-carousel-horizontal-swiper"
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          425: { slidesPerView: 1, centeredSlides: true },
          769: { slidesPerView: 1, centeredSlides: true },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`war-carousel-slide ${activeIndex === index ? "war-carousel-active" : ""}`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
