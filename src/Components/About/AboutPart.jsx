import React from "react";
import sampleImage from "../../assets/sampleImage.jpg";

function AboutPart() {
  return (
    <div className="relative overflow-hidden">
      {/* Wavy Top SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-[100px] sm:h-[120px] -z-10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="topWaveGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#8cc63f" />
            <stop offset="50%" stopColor="#39b778" />
            <stop offset="100%" stopColor="#00acc1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#topWaveGradient)"
          d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,197.3C840,171,960,149,1080,160C1200,171,1320,213,1380,234.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-20 gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 z-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 font-pacifico">
            Who We Are
          </p>
          <p className="text-gray-800 font-poppins text-sm sm:text-base text-justify leading-relaxed">
            We are proud to be recognized as the leading Polyhouse construction
            company in North India, pioneering advanced greenhouse solutions for
            modern agriculture. At Rathee Agrotech, our strength lies in a team
            of dedicated professionals with deep expertise, scientific
            knowledge, and rich experience in the fields of agriculture and
            research. We are committed to transforming traditional farming
            through cutting-edge, climate-smart infrastructure like Polyhouses
            and Net Houses. <br />
            <br />
            We believe in delivering best-in-class quality, durable
            construction, and dependable service—because your growth is our
            mission.
          </p>
        </div>

        {/* Right Image & Stats */}
        <div className="w-full md:w-1/2 z-10 flex flex-col items-center">
          <img
            src={sampleImage}
            alt="Team working"
            className="rounded-t-xl w-full max-w-md h-auto object-cover"
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 bg-white p-6 rounded-b-xl shadow-lg w-full max-w-md text-center mt-2">
            <div>
              <p className="text-2xl font-bold">3.5</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">23</p>
              <p className="text-sm text-gray-500">Project Challenge</p>
            </div>
            <div>
              <p className="text-2xl font-bold">830+</p>
              <p className="text-sm text-gray-500">Positive Reviews</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100K</p>
              <p className="text-sm text-gray-500">Trusted People</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPart;
