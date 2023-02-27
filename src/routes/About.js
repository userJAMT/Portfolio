import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import AboutContent from "../components/AboutContent/AboutContent";
import { ThemeContext } from "../context";

function About() {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;

  return (
    <div>
      <Navbar />
      <HeroImg2
        heading={language === "EN" ? "ABOUT ME" : "SOBRE MÍ"}
        text={
          language === "EN"
            ? "A friendly developer tech lover"
            : "Un fanático de la tecnología"
        }
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
