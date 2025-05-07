import React from "react";

function Vision() {
  return (
    <div class="flex flex-col md:flex-row gap-6 p-6 bg-[#2d6a4f]">
      {/*-- Vision Card -->*/}
      <div class="flex-1 bg-gray-50 rounded-xl shadow-sm p-6">
        <p class="text-sm text-orange-500 font-semibold mb-2">Our Vision</p>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">
          Empowering Lives Through Agriculture
        </h2>
        <p class="text-gray-600 text-sm">
          Our unwavering vision is to revolutionize protected farming by
          building smart, sustainable Polyhouses and Net Houses that help
          farmers grow more, earn more, and thrive year-round.
        </p>
      </div>

      {/*-- mission Card -->*/}
      <div class="flex-1 bg-gray-50 rounded-xl shadow-sm p-6">
        <p class="text-sm text-orange-500 font-semibold mb-2">Our Mission</p>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">
          Innovative Greenhouse Solutions for Every Farmer
        </h2>
        <p class="text-gray-600 text-sm">
          Our mission is to deliver high-quality, durable Polyhouse and Net
          House structures, backed by expert agronomy support—empowering every
          grower to succeed through innovation and care.
        </p>
      </div>
    </div>
  );
}

export default Vision;
