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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlantCardContainer />} />/
          <Route path="/home" element={<MainHome />} />/
          <Route path="/footer" element={<NewFooter />} />/
          <Route path="/sample" element={<Testimonial />} />/
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
