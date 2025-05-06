import { useState } from "react";
import image from "../assets/faq.png";

function FAQ() {
  const faqData = [
    {
      question: "What is Polyhouse Farming?",
      answer:
        "Polyhouse farming is a type of protected agriculture where crops are grown under controlled environmental conditions inside a polyethylene-covered structure.",
    },
    {
      question: "What are the advantages of Polyhouse Farming?",
      answer:
        "It allows year-round cultivation, protection from extreme weather, higher yields, better quality produce, and reduced pest attacks.",
    },
    {
      question: "Which crops are suitable for Polyhouse Farming?",
      answer:
        "Crops like tomatoes, cucumbers, capsicum, strawberries, gerberas, and orchids are commonly grown in polyhouses.",
    },
    {
      question: "Is Polyhouse Farming profitable?",
      answer:
        "Yes, with proper management, polyhouse farming can yield higher returns due to improved quality and off-season cultivation.",
    },
    {
      question: "What support is available for setting up a polyhouse?",
      answer:
        "Many state governments and agricultural departments offer subsidies, training, and technical assistance to farmers.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="relative bg-white">
      {/* Main FAQ Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center p-10 gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={image}
            alt="Polyhouse Farming"
            className="rounded-lg w-full max-w-md shadow-lg rotate-[-3deg]"
          />
        </div>

        {/* Right FAQ Section */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="rounded-md shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                >
                  {item.question}
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-4 text-sm text-black">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.59,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#2d6a4f" }}
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default FAQ;
