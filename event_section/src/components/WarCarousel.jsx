import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./WarCarousel.css";

const HorizontalSlider = ({ className = "" }) => {
  const originalSlides = [
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1766921651/download_v1dt8z.jpg",
      text: "",
    },

  ];

  // Duplicate slides for smooth looping
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`imagesSliderContainer ${className}`}>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        loopAdditionalSlides={2}
        centeredSlides={true}
        autoplay={{
          delay: 1300,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex % originalSlides.length)
        }
        modules={[Autoplay]}
        className="horizontal-swiper"
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          480: { slidesPerView: 1, centeredSlides: false },
          900: { slidesPerView: 1, centeredSlides: false },
          901: { slidesPerView: 1, centeredSlides: true },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`hori-slide-custom ${
              activeIndex === index % originalSlides.length
                ? "active-slide"
                : ""
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${(index % originalSlides.length) + 1}`}
            />
            {slide.text && <div className="slide-text">{slide.text}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
