import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import Blog from "./Blog";
import NewFooter from "../NewFooter";
import BackToTop from "../BackToTop";
import GallerySection from "./Gallerysection";

function GalleryMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <GallerySection />
      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default GalleryMain;
