import React, { useEffect, useRef, useState } from "react";
import image1 from "../assets/banner1.jpeg";
import image2 from "../assets/banner2.jpeg";
import image3 from "../assets/banner3.jpeg";

const CarouselBanner = () => {
  const originalSlides = [image1, image2, image3];
  const loopSlides = [
    originalSlides[originalSlides.length - 1],
    ...originalSlides,
    originalSlides[0],
  ];
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.7s ease-in-out";
    track.style.transform = `translateX(-${index * 100}vw)`;

    const handleTransitionEnd = () => {
      if (index === loopSlides.length - 1) {
        track.style.transition = "none";
        track.style.transform = `translateX(-100vw)`;
        setIndex(1);
      } else if (index === 0) {
        track.style.transition = "none";
        track.style.transform = `translateX(-${originalSlides.length * 100}vw)`;
        setIndex(originalSlides.length);
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, loopSlides.length, originalSlides.length]);

  return (
    <div className="relative w-screen h-[550px] overflow-hidden">
      <div
        ref={trackRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${loopSlides.length * 100}vw`,
          transform: `translateX(-${index * 100}vw)`,
        }}
      >
        {loopSlides.map((src, i) => (
          <div key={i} className="w-screen h-[550px] flex-none relative">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover block"
            />
            {i === 1 && index === 1 && (
              <div className="absolute ml-15  top-[45%]  left-[3%] inset-0  p-8 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Freshness <br /> Rooted in Technology
                </h1>
                <p className="max-w-lg mb-6">
                  🌱 Cultivating Quality, Sustaining Tomorrow.
                </p>
                <div className="flex gap-4 mb-4">
                  <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700">
                    Contact Us
                  </button>
                  <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;
