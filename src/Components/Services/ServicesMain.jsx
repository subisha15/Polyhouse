import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import NewFooter from "../NewFooter";
import BackToTop from "../BackToTop";
import FeatureCard from "./FeatureCard";
import FeaturesSection from "./FeatureSection";
import Testimonial from "../Testimonial";

function ServicesMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <FeaturesSection />

      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default ServicesMain;
