import React from "react";
import Img from "../assets/poly_vector.png";
import founder from "../assets/founder.png";
//import grass from "../assets/grass.png";

function AboutSection() {
  return (
    <section className="relative bg-[#fefefe] overflow-hidden py-16 px-4 sm:px-6 lg:px-16">
      {/* Wavy bottom Background
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none ">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.59,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#2d6a4f" }}
          ></path>
        </svg>
      </div> */}

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10  bg-emerald-50 p-8 rounded-2xl">
        {/* Left Text Content */}
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <p className="text-4xl text-black mb-2 font-pacifico">Who We Are?</p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-green-700 mb-4">
            Shaping Sustainable Farming <br />
            <span className="text-gray-600">
              Through Innovation & Protection
            </span>
            <br />
            <span className="text-green-600">With PolyAgrotech </span>
          </h2>
          <p className="text-sm sm:text-base md:text-md text-gray-800 font-semibold  text-justify mt-2 mb-6">
            At Rathee Agrotech, we are passionate about sustainable agriculture
            and innovative farming practices. Our polyhouse facility is designed
            to provide optimal growing conditions for a variety of high-quality
            crops throughout the year. By using advanced technology and climate
            control systems, we ensure consistent yield, water efficiency, and
            minimal environmental impact. Our dedicated team of agricultural
            experts and skilled workers is committed to producing fresh,
            healthy, and pesticide-free vegetables and flowers for local markets
            and beyond. We believe in empowering farmers, promoting green
            practices, and delivering farm-fresh produce straight from our
            polyhouse to your home.
          </p>

          {/* Founder Words */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <img
              src={founder}
              alt="Founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-base sm:text-md font-bold">
                Few Words From Our Founder
              </h4>
              <p className="text-sm text-gray-600 font-semibold text-justify">
                Lorem ipsum dolor sit amet consectetur. Egestas eget vulputate
                sit nunc. Quisque ultricies pulvinar nibh eros non commodo
                aenean vitae. Lorem vitae dictumst turpis dui massa.
              </p>
            </div>
          </div>

          <button className="bg-[#2d6a4f] hover:bg-green-700 text-white px-6 py-3 rounded-md text-sm font-semibold">
            Get Quote
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
