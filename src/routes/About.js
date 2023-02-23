import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import AboutContent from "../components/AboutContent/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="SOBRE MÍ"
        text="Un fanático de la tecnología"
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
