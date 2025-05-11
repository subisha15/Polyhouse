import React from "react";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";

const MissionVision = () => {
  return (
    <div className="bg-gray-50  px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Vision: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2">
            <img
              src={vision}
              alt="Vision"
              className="zigzag w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 font-pacifico mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                Our vision at Rathee Agrotech Polyfarm is to revolutionize
                modern agriculture by becoming a leading provider of polyhouse
                solutions that drive innovation, sustainability, and growth. We
                aspire to create a future where farmers can cultivate
                high-quality crops year-round with minimal environmental impact.
                By integrating advanced technology with practical farming needs,
                we envision transforming traditional agriculture into a more
                resilient, climate-smart, and profitable system for farmers
                across the globe.
              </p>
              <button className="bg-[#2d6a4f] text-white px-5 py-2 rounded-lg shadow-md hover:bg-emerald-800 transition">
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        {/* Mission: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch">
          <div className="w-full md:w-1/2">
            <img
              src={mission}
              alt="Mission"
              className="zigzag w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 font-pacifico mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                At Rathee Agrotech Polyfarm, our mission is to promote
                sustainable and efficient farming practices through the
                installation of high-quality polyhouses. We are dedicated to
                empowering farmers by providing protected cultivation solutions
                that enhance crop yield, reduce dependency on weather
                conditions, and support year-round farming. Our goal is to make
                advanced agricultural technologies accessible and affordable,
                helping cultivators improve productivity while preserving
                environmental balance.
              </p>
              <button className="bg-[#2d6a4f] text-white px-5 py-2 rounded-lg shadow-md hover:bg-emerald-800 transition">
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
