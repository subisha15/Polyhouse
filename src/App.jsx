import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantCardContainer from "./Components/PlantCardContainer";
import TopNavbar from "./Components/TopNavbar";
import MainHome from "./Components/MainHome";
import Footer from "./Components/Footer";
import NewFooter from "./Components/NewFooter";
import AboutSection from "./Components/AboutSection";
import Banner from "./Components/Banner";
import FAQ from "./Components/FAQ";
import NewNav from "./Components/NavBar";
import NavBar from "./Components/NavBar";
import Testimonial from "./Components/Testimonial";
import AboutPart from "./Components/About/AboutPart";
import AboutMain from "./Components/About/AboutMain";
import Vision from "./Components/About/Vision";
import TeamCard from "./Components/About/TeamCard";
import FeaturesSection from "./Components/Services/FeatureSection";
import ServicesMain from "./Components/Services/ServicesMain";

import ContactMain from "./Components/ContactUs/ContactMain";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />/
          <Route path="/about" element={<AboutMain />} />/
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/sample" element={<ContactMain />} />/
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
