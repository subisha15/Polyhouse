import React from "react";
import TopNavbar from "./TopNavbar";

import PlantCardContainer from "./PlantCardContainer";
import CarouselBanner from "./CarouselBanner";
import Footer from "./Footer";
import NewFooter from "./NewFooter";
import AboutSection from "./AboutSection";
import PolyhouseStats from "./PolyhouseStats";
import Banner from "./Banner";
import FAQ from "./FAQ";
import NavBar from "./NavBar";
import Testimonial from "./Testimonial";
import BackToTop from "./BackToTop";

function MainHome() {
  return (
    <div className="">
      <TopNavbar />
      <NavBar />
      <Banner />

      <AboutSection />
      <PlantCardContainer />
      <Testimonial />
      <PolyhouseStats />
      <FAQ />
      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default MainHome;
