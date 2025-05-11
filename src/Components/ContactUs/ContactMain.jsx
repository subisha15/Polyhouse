import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import NewFooter from "../NewFooter";
import ContactUs from "./ContactUs";
import BackToTop from "../BackToTop";

function ContactMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <ContactUs />
      <NewFooter />
      <BackToTop />
    </div>
  );
}

export default ContactMain;
