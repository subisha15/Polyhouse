// FeatureCard.jsx
import React from "react";

function ServiceCard({ image, title, description }) {
  return (
    <div className="bg-[#5c9c3c] text-white rounded-lg text-center px-4 pt-24 pb-8 relative">
      {/* Circular Image */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 ">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-[#5c9c3c] relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />

          {/* Title on image */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#6cba4d] px-3 py-1 rounded-full text-white font-semibold text-sm shadow-md">
            {title}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed px-2">{description}</p>
    </div>
  );
}

export default ServiceCard;
