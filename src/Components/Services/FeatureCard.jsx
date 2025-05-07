import React from "react";

function FeatureCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center  text-white text-center px-4  relative my-15 mx-10">
      <div className="bg-green-600 rounded-full px-4 py-2 -mt-[100px] font-semibold shadow-md absolute top-0">
        {title}
      </div>
      <p className="mt-4 text-sm absolute bottom-0">{description}</p>
      <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg absolute top-4">
        <img src={image} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default FeatureCard;
