import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import Work from "../components/Work";
import { ThemeContext } from "../context";

function Project() {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div>
      <Navbar />
      <HeroImg2
        heading={language === "EN" ? "PROJECTS" : "PROYECTOS"}
        text={
          language === "EN"
            ? "My most recent works"
            : "Mis trabajos mas recientes"
        }
      />
      <Work />
      <Footer />
    </div>
  );
}

export default Project;
