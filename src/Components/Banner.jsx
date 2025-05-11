import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.jpg";

const images = [image1, image2, image3];

function Banner() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);
  //const totalImages = images.length * 2; // because we duplicate

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + 1;
        if (newPos >= images.length) {
          // Reset without flash (by setting to 0 without animation)
          if (containerRef.current) {
            containerRef.current.style.transition = "none";
            containerRef.current.style.transform = `translateX(0%)`;
            // Force reflow to apply no-transition instantly
            containerRef.current.offsetHeight;
            containerRef.current.style.transition =
              "transform 0.7s ease-in-out";
          }
          return 1;
        }
        return newPos;
      });
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${position * 100}%)`;
    }
  }, [position]);

  return (
    <div className="overflow-hidden w-[1500px] h-[550px] relative">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
      >
        {duplicatedImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-[1500px] h-[550px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
