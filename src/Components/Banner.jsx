import React from "react";
import image1 from "../assets/carousel1.jpg";
import image2 from "../assets/carousel2.jpg";
import image3 from "../assets/carousel3.jpg";

const images = [image1, image2, image3];

function Banner() {
  const duplicatedImages = [...images, ...images]; // Duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full h-[550px] relative ">
      <div
        className="flex animate-slideInfinite"
        style={{ width: `${duplicatedImages.length * 100}vw` }}
      >
        {duplicatedImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className="w-screen h-[550px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
