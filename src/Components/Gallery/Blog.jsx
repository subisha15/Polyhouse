import React from "react";
import video1 from "../../assets/poly.mp4";
import video2 from "../../assets/poly.mp4";
import video3 from "../../assets/poly.mp4";
import video4 from "../../assets/poly.mp4";
import bg from "../../assets/whitebg.png";

function Blog() {
  const blogData = [
    {
      video: video1,
      category: "Farming",
      title: "Beginner’s Guide to Starting a Polyhouse Farm",
      description:
        "Learn how to set up your first polyhouse with step-by-step guidance on materials, layout, and climate control.",
    },
    {
      video: video2,
      category: "Greenhouse",
      title: "Why Polyhouse Farming is the Future of Agriculture",
      description:
        "Explore the benefits of polyhouse farming, from improved yields to sustainable growing practices year-round.",
    },
    {
      video: video3,
      category: "Technology",
      title: "Automation in Polyhouse: Sensors, Drip, and AI",
      description:
        "Discover how technology is transforming controlled environment agriculture with real-time monitoring and precision irrigation.",
    },
    {
      video: video4,
      category: "Crops",
      title: "Top 5 Crops to Grow in a Polyhouse",
      description:
        "Maximize your profits by choosing the best-suited crops for polyhouse environments, like capsicum, cucumber, and strawberries.",
    },
  ];

  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2 className="text-4xl font-bold mb-10 font-pacifico text-center">
        Polyhouse Farming Techniques & Success Stories{" "}
        <span className="text-green-600  text-center">-Video Gallery</span>
      </h2>
      <div className="max-w-7xl mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-8  ">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <video
                src={blog.video}
                controls
                className="w-full h-72 object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-green-600 text-white text-xs font-semibold px-4 py-1">
                {blog.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
