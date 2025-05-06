import React from "react";
//import bg from "../assets/statbg.jpg";
import {
  FaSeedling,
  FaLeaf,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

function PolyhouseStats() {
  return (
    <div
      className="bg-gradient-to-t from-[#1b4332] via-[#2d6a4f] to-[#52b788]
 text-white py-12 "
    >
      <div className="w-full  px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <FaSeedling size={48} className="mb-4" />
          <p className="text-lg">Organic Polyhouses Built</p>
          <h2 className="text-3xl font-bold mt-2">120+</h2>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaLeaf size={48} className="mb-4" />
          <p className="text-lg">Chemical-Free Cultivation</p>
          <h2 className="text-3xl font-bold mt-2">100%</h2>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher size={48} className="mb-4" />
          <p className="text-lg">Farmers Trained</p>
          <h2 className="text-3xl font-bold mt-2">85+</h2>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <FaAward size={48} className="mb-4" />
          <p className="text-lg">Sustainability Awards</p>
          <h2 className="text-3xl font-bold mt-2">5+</h2>
        </div>
      </div>
    </div>
  );
}

export default PolyhouseStats;
