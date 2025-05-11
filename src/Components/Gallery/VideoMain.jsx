import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import Blog from "./Blog";
import NewFooter from "../NewFooter";
import BackToTop from "../BackToTop";

function VideoMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <Blog />
      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default VideoMain;
