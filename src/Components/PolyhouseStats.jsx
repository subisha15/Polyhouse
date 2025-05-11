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
      className="bg-gradient-to-r from-[#8cc63f] via-[#39b778] to-[#00acc1]
        py-12  "
    >
      <div className="w-full  px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <FaSeedling size={48} className="mb-4" />
          <p className="text-lg font-bold">Organic Polyhouses Built</p>
          <h2 className="text-3xl font-bold mt-2">120+</h2>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <FaLeaf size={48} className="mb-4" />
          <p className="text-lg font-bold">Chemical-Free Cultivation</p>
          <h2 className="text-3xl font-bold mt-2">100%</h2>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <FaChalkboardTeacher size={48} className="mb-4" />
          <p className="text-lg font-bold">Farmers Trained</p>
          <h2 className="text-3xl font-bold mt-2">85+</h2>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <FaAward size={48} className="mb-4" />
          <p className="text-lg font-bold">Sustainability Awards</p>
          <h2 className="text-3xl font-bold mt-2">5+</h2>
        </div>
      </div>
    </div>
  );
}

export default PolyhouseStats;
