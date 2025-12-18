import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./VerticalSlider.css";

const VerticalSlider = () => {
  const baseSlides = [
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1739783043/5_ihggwg.jpg",
      text: "Co-Powered By",
    },
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1739782897/bitmark_iiguxv.jpg",
      text: "Educational Sponsor",
    },
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1738677593/images_mx0uho.jpg",
      text: "Media Sponsor",
    },
  ];

  // 🔥 duplicate slides for smooth loop
  const slides = [...baseSlides, ...baseSlides, ...baseSlides];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="vertical-slider-container">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex % baseSlides.length)
        }
        modules={[Autoplay]}
        className="vertical-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`vertical-slide ${
              activeIndex === index % baseSlides.length ? "active-slide" : ""
            }`}
          >
            <img src={slide.image} alt={slide.text} />
            <div className="slide-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VerticalSlider;
