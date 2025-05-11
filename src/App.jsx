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

import FeaturesSection from "./Components/Services/FeatureSection";
import ServicesMain from "./Components/Services/ServicesMain";

import ContactMain from "./Components/ContactUs/ContactMain";
import MissionVision from "./Components/About/MissionVision";

import GalleryMain from "./Components/Gallery/GalleryMain";
import Blog from "./Components/Gallery/Blog";
import VideoMain from "./Components/Gallery/VideoMain";
import ServiceContainer from "./Components/Services/ServiceContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />/
          <Route path="/about" element={<AboutMain />} />/
          <Route path="/contact" element={<ContactMain />} />
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/videos" element={<VideoMain />} />
          <Route path="/sample" element={<ServiceContainer />} />/
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
