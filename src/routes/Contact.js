import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import Form from "../components/Form/Form";
import { ThemeContext } from "../context";

function Contact() {
  const theme = useContext(ThemeContext)
  const {language} = theme.state

  return (
    <div>
      <Navbar />
      <HeroImg2 heading={language === "EN" ? "CONTACT" : "CONTACTO"}
        text={
          language === "EN"
            ? "Lets have a chat"
            : "Conversemos un poco"
        } />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
