import React from "react";
import sampleImage from "../../assets/sampleImage.jpg";
function AboutPart() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 s"
      style={{ background: "linear-gradient(to right, #a8d5ba, #2d6a4f)" }}
    >
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-orange-500 font-semibold mb-2">How It Started</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-4">
          Our Dream is <br />
          Building the Future of <br />
          Farming
        </h1>
        <p className="text-gray-600">
          We are proud to be recognized as the leading Polyhouse construction
          company in North India, pioneering advanced greenhouse solutions for
          modern agriculture. At Rathee Agrotech, our strength lies in a team of
          dedicated professionals with deep expertise, scientific knowledge, and
          rich experience in the fields of agriculture and research. We are
          committed to transforming traditional farming through cutting-edge,
          climate-smart infrastructure like Polyhouses and Net Houses.
          <br />
          ...We believe in delivering best-in-class quality, durable
          construction, and dependable service—because your growth is our
          mission.
        </p>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 flex flex-col items-center">
        {/* Image */}
        <img
          src={sampleImage}
          alt="Team working"
          className="rounded-t-xl w-full max-w-md object-cover"
        />

        {/* Stats Card */}
        <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-b-xl shadow-lg w-full max-w-md">
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
  );
}

export default AboutPart;
