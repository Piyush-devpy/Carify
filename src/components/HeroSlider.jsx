import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";

const HeroSlider = () => {
  const images = [img1, img2, img3, img4, img5];

  // Clone first & last for infinite loop
  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop reset
  useEffect(() => {
    if (current === extendedImages.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 600);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(images.length);
      }, 600);
    }
  }, [current, extendedImages.length, images.length]);

  // Re-enable transition after reset
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => {
        setTransition(true);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [transition]);

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="slider" >
      {/* LEFT ARROW */}
      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>

      {/* SLIDER TRACK */}
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? "transform 0.6s ease-in-out" : "none",
        }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className="slide-img"
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default HeroSlider;