import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import AboutPart from "./AboutPart";
import NewFooter from "../NewFooter";
import Vision from "./Vision";
import TeamCard from "./TeamCard";
import BackToTop from "../BackToTop";
import MissionVision from "./MissionVision";

function AboutMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <AboutPart />
      <MissionVision />
      <TeamCard />
      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default AboutMain;
