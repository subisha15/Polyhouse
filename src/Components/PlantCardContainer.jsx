import React from "react";
import plant1 from "../assets/plant.jpg";
// import plant2 from "../assets/plant2.jpeg";
// import plant3 from "../assets/plant3.jpeg";
// import plant4 from "../assets/plant4.jpeg";
import House_Logo from "../assets/House_Logo.png";
import bg from "../assets/whitebg.png";
import PlantCard from "./PlantCard";

function PlantCardContainer() {
  const services = [
    {
      title: "Protected Cultivation",
      imageSrc: plant1,
      description:
        "Grow premium crops year-round in controlled greenhouse environments.",
    },
    {
      title: "Climate Control Systems",
      imageSrc: plant1,
      description:
        "Automate temperature, humidity, and irrigation systems to ensure ideal growing conditions.",
    },
    {
      title: "Crop Consultation  Services",
      imageSrc: plant1,
      description:
        "Get expert advice, crop planning, and support  to maximize productivity.",
    },
    {
      title: "Advanced Hydroponics",
      imageSrc: plant1,
      description:
        "Grow crops without soil using nutrient-rich water solutions.",
    },
  ];

  return (
    <div
      className="flex  flex-col flex-wrap justify-center  items-center my-6  mb-12 gap-6 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-4xl text-black mb-2 font-pacifico">We Provide</p>
        <h1 className="text-2xl sm:text-5xl md:text-4xl font-bold text-center text-green-500 sm:mb-5 lg:mb-10">
          Best Polyhouse Services <br />
          In India
        </h1>
      </div>
      <div className="flex   flex-wrap justify-between  items-center  gap-10">
        {services.map((service, index) => (
          <PlantCard
            key={index}
            title={service.title}
            description={service.description}
            bgImage={service.imageSrc}
            cornerIcon={House_Logo}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantCardContainer;
