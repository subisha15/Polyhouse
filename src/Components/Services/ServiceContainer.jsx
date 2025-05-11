import React from "react";
import service_Img from "../../assets/feature.jpg";
import ServiceCard from "./ServiceCard";

function ServiceContainer() {
  const features = [
    {
      image: service_Img,
      title: "Bank Finance",
      description:
        "The Company has tie-up with Leading PSU Banks. The Funds are arranged by Company from these Banks.",
    },
    {
      image: service_Img,
      title: "Green House",
      description:
        "Green houses structure with walls and roof made chiefly of transparent material and are climate controlled",
    },
    {
      image: service_Img,
      title: "Soil Treatment",
      description:
        "This enables the Farmer to get Best yield with Best quality produce help him to get better rates/more profit",
    },
    {
      image: service_Img,
      title: "Hi-Tech Irrigation",
      description:
        "This water system framework is to inundate just the root zone rather than the whole field surface",
    },
    {
      image: service_Img,
      title: "Marketing Assistance",
      description:
        "Company is helping the farmers to connect to Market for Best Price of their produce. Company has also Transport fleet for same, along with tie-ups with Food Chain.",
    },
    {
      image: service_Img,
      title: "Subsidy Assistance",
      description:
        "Farming is the single largest private sector contributing to economic activity in the country. Govt. gives subsidies from 50%-85% on Green House Projects.",
    },
    {
      image: service_Img,
      title: "Agronomical Support",
      description:
        "Agronomy is the underlying science in production and quality of improvement of field crops with the efficient use.",
    },
  ];

  return (
    <div>
      <div className="flex m-6 flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 font-pacifico">
          Services We Offer
        </h1>
      </div>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-25">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <ServiceCard
                image={feature.image}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServiceContainer;
