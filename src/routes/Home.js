import React from "react";
import HeroImg from "../components/HeroImg/HeroImg";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Work from "../components/Work";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
