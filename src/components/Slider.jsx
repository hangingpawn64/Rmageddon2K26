import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Slider.css";
const HorizontalSlider = ({ className }) => {
  const originalSlides = [
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1765978972/sponsors.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1765978972/sponsors.jpg",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dmbmdfmhl/image/upload/v1765978972/sponsors.jpg",
      text: "",
    },

  ];

  // Duplicate slides for smooth looping
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <Swiper
        direction="horizontal"
        slidesPerView={3}
        spaceBetween={10}
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
        className="slider-horizontal-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          680: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          900: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}

      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`slider-item-custom ${activeIndex === index % originalSlides.length ? "slider-active-slide" : ""
              }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${(index % originalSlides.length) + 1}`}
            />
            <div className="slider-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
