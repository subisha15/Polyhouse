import React from "react";

function ServicePart() {
  return (
    <div class="bg-[#5c9c3c] py-16 flex justify-center items-center">
      <div class="bg-[#5c9c3c] text-white w-80 rounded-lg text-center px-4 pt-24 relative">
        <div class="absolute -top-24 left-1/2 transform -translate-x-1/2">
          <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#5c9c3c]">
            <img
              src="/path/to/image.jpg"
              alt="Bank Finance"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#6cba4d] px-4 py-1 rounded-full text-white font-bold text-sm">
            Bank Finance
          </div>
        </div>

        <p class="mt-4 text-sm leading-relaxed">
          The Company has tie-up with Leading PSU Banks. The Funds are arranged
          by Company from these Banks.
        </p>
      </div>
    </div>
  );
}

export default ServicePart;
