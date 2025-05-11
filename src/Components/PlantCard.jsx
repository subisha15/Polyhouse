import React from "react";

function PlantCard({ title, description, bgImage, cornerIcon }) {
  return (
    <div className="w-[325px] h-auto border-2 border-gray-200 bg-white rounded-2xl shadow-lg overflow-hidden text-center flex flex-col mx-auto">
      {/* Curved background image area */}
      <div className="relative w-full h-[150px]">
        <svg
          viewBox="0 0 220 160"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="cardCurve" clipPathUnits="userSpaceOnUse">
              <path d="M0,0 H220 V70 C160,100 50,160 0,110 Z" fill="white" />
            </clipPath>
          </defs>
          <image
            href={bgImage}
            width="220"
            height="160"
            clipPath="url(#cardCurve)"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>

        {/* Top-left icon */}
        <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
          <img src={cornerIcon} alt="icon" className="w-5 h-5 object-contain" />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col items-center justify-between px-4 pt-4 pb-3 flex-grow gap-4">
        <h2 className="text-md md:text-md font-bold text-gray-800 font-poppins">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-gray-600 font-poppins leading-tight">
          {description}
        </p>
        <button className="bg-[#2d6a4f] hover:bg-green-600 text-white text-xs md:text-sm  font-poppins cursor-pointer font-semibold px-5 py-2 rounded-lg transition duration-200">
          View More
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
