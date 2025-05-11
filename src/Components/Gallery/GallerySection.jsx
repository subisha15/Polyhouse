import React from "react";
import image1 from "../../assets/gallery1.jpg";
import image2 from "../../assets/gallery2.jpg";
import image3 from "../../assets/gallery3.jpg";
import bg from "../../assets/whitebg.png";
const GallerySection = () => {
  const projects = [
    {
      image: image1,
      title: "sector 47",
      location: "AMRITSAR",
    },
    {
      image: image2,
      title: "VILL. HAIBATPUR",
      location: "YAMUNANAGAR",
    },
    {
      image: image3,
      title: "VILL. SALEMPURI 4 ACRE,",
      location: "FATEHABAD",
    },
    {
      image: image1,
      title: "VILL. KARNAL",
      location: "HARYANA",
    },
    {
      image: image2,
      title: "GREENHOUSE",
      location: "ROHTAK",
    },
    {
      image: image3,
      title: "VILL. MALOUT",
      location: "PUNJAB",
    },
    {
      image: image1,
      title: "POLYHOUSE",
      location: "SIRSA",
    },
    {
      image: image3,
      title: "VILL. DHURI",
      location: "SANGRUR",
    },
    {
      image: image1,
      title: "VILL. KARNAL",
      location: "HARYANA",
    },
  ];

  const currentProjects = [
    {
      image: image1,
      title: "sector 47",
      location: "AMRITSAR",
    },
    {
      image: image2,
      title: "VILL. HAIBATPUR",
      location: "YAMUNANAGAR",
    },
    {
      image: image3,
      title: "VILL. SALEMPURI 4 ACRE,",
      location: "FATEHABAD",
    },
    {
      image: image2,
      title: "VILL. HAIBATPUR",
      location: "YAMUNANAGAR",
    },
  ];

  return (
    <>
      <div
        className="py-12 px-4 text-center bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-4xl font-bold mb-10 font-pacifico">
          Our Various <span className="text-green-600 ">Projects</span> Till Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent w-full max-w-xs mx-auto overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-tl-4xl rounded-br-4xl"
              />
              <p className="text-lg font-semibold mt-4 mb-6 px-4">
                {project.title}{" "}
                <span className="text-green-600">{project.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="py-3 px-4 text-center bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h2 className="text-4xl font-bold mb-10 font-pacifico">
          Our Current <span className="text-green-600 ">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent  w-full max-w-xs mx-auto overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-tl-4xl rounded-br-4xl"
              />
              <p className="text-lg font-semibold mt-4 mb-6 px-4">
                {project.title}{" "}
                <span className="text-green-600">{project.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GallerySection;
