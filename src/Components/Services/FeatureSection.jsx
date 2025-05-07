// src/components/FeaturesSection.jsx
import FeatureCard from "./FeatureCard";
import leaf from "../../assets/feature.jpg";
// import bankFinance from "../assets/bank-finance.jpg";
// import greenHouse from "../assets/green-house.jpg";
// import soilTreatment from "../assets/soil-treatment.jpg";
// import irrigation from "../assets/hi-tech-irrigation.jpg";

const FeaturesSection = () => {
  const features = [
    {
      image: leaf,
      title: "Bank Finance",
      description:
        "The Company has tie-up with Leading PSU Banks. The Funds are arranged by Company from these Banks.",
    },
    {
      image: leaf,
      title: "Green House",
      description:
        "Green houses structure with walls and roof made chiefly of transparent material and are climate controlled",
    },
    {
      image: leaf,
      title: "Soil Treatment",
      description:
        "This enables the Farmer to get Best yield with Best quality produce help him to get better rates/more profit",
    },
    {
      image: leaf,
      title: "Hi-Tech Irrigation",
      description:
        "This water system framework is to inundate just the root zone rather than the whole field surface",
    },
  ];

  return (
    <div>
      <div className="flex m-6 flex-col  justify-center items-center">
        <h1>Services We Offer</h1>
      </div>
      <section
        className=" py-12"
        style={{ background: "linear-gradient(to right, #a8d5ba, #2d6a4f)" }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
