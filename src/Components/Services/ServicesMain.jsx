import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import NewFooter from "../NewFooter";
import BackToTop from "../BackToTop";
import FeatureCard from "./FeatureCard";
import FeaturesSection from "./FeatureSection";
import Testimonial from "../Testimonial";
import ServicePart from "./ServicePart";
import ServiceContainer from "./ServiceContainer";

function ServicesMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <ServiceContainer />

      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default ServicesMain;
