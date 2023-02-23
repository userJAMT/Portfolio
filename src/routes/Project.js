import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import Work from "../components/Work";

function Project() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROYECTOS" text="Mis trabajos mas recientes" />
      <Work />
      <Footer />
    </div>
  );
}

export default Project;
