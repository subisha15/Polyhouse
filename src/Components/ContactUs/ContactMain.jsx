import React from "react";
import TopNavbar from "../TopNavbar";
import NavBar from "../NavBar";
import NewFooter from "../NewFooter";
import ContactUs from "./ContactUs";

function ContactMain() {
  return (
    <div>
      <TopNavbar />
      <NavBar />
      <ContactUs />
      <NewFooter />
    </div>
  );
}

export default ContactMain;
