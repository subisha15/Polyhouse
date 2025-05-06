import React from "react";
import Img from "../assets/poly_vector.png";
import founder from "../assets/founder.png";

function AboutSection() {
  return (
    <section className="relative bg-[#fefefe] overflow-hidden py-16 px-4 sm:px-6 lg:px-16">
      {/* Wavy Top Background */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-72"
          preserveAspectRatio="none"
        >
          <path
            fill="#2d6a4f"
            fillOpacity="1"
            d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,144C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <path
            fill="#95c6a2"
            fillOpacity="0.6"
            d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 mt-36 bg-emerald-50 p-5 rounded-2xl">
        {/* Left Text Content */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <p className="text-lg text-gray-700 mb-2">About Us!</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-green-700 mb-4">
            Nurturing Growth Under <br />
            <span className="text-gray-600">Every Season, Every Shade</span>
            <br />
            <span className="text-green-600">Inside Our Polyhouse</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black font-semibold mb-6">
            Our poly greenhouses offer a controlled environment that protects
            crops from harsh weather, enabling sustainable and high-yield
            farming all year round.
          </p>

          {/* Founder Words */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <img
              src={founder}
              alt="Founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-base sm:text-lg font-semibold">
                Few Words From Our Founder
              </h4>
              <p className="text-sm text-black font-semibold">
                Lorem ipsum dolor sit amet consectetur. Egestas eget vulputate
                sit nunc. Quisque ultricies pulvinar nibh eros non commodo
                aenean vitae. Lorem vitae dictumst turpis dui massa.
              </p>
            </div>
          </div>

          <button className="bg-[#2d6a4f] hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-semibold">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center z-10">
          <img
            src={Img}
            alt="Fruits"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-64 md:h-96 object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
