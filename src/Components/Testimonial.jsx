import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Testimonial() {
  const testimonials = [
    {
      name: "Zuber All Hasan",
      position: "CEO, Developer",
      icon: "👤",
      message:
        "We've been thoroughly impressed with the quality of the poly green house from Rathe Agrotech. The structure is durable, well-designed, and perfect for year-round cultivation. Highly recommend their service!",
    },
    {
      name: "Mahfuz Riad",
      position: "CEO, Company",
      icon: "👤",
      message:
        "Rathe Agrotech delivered exactly what we needed for our horticulture project. The team was professional, timely, and supportive throughout the installation. The greenhouse is performing excellently!",
    },
    {
      name: "Anika Sharma",
      position: "Designer, Studio X",
      icon: "👤",
      message:
        "Our experience with Rathe Agrotech has been fantastic. The poly green house is not only sturdy but also helps maintain optimal growing conditions. Their post-installation support is commendable.",
    },
    {
      name: "David Lee",
      position: "Manager, TechWorld",
      icon: "👤",
      message:
        "Thanks to Rathe Agrotech, we now have a reliable and cost-effective greenhouse setup. The team provided expert guidance and ensured everything was tailored to our crop needs. Truly satisfied!",
    },
    {
      name: "Ayesha Khan",
      position: "Agronomist",
      icon: "👤",
      message:
        "Exceptional experience with Rathe Agrotech! Their polyhouse solutions have increased our productivity and crop health significantly. Would recommend to any grower.",
    },
    {
      name: "Pranav Mehta",
      position: "Entrepreneur",
      icon: "👤",
      message:
        "Very professional and trustworthy service from Rathe Agrotech. Their greenhouses are well-engineered and low-maintenance. A great investment for any agri-business.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 text-black">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-[#2d6a4f]">Clients Say</span>
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Honest feedback from those who trust us
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-green-200 text-red-500">
                    {t.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t.message}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-[#2d6a4f] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
