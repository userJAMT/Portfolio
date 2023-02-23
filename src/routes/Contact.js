import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImg2/HeroImg2";
import Form from "../components/Form/Form";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACTO" text="Conversemos un poco" />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;
