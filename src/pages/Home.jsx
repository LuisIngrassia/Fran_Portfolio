import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
//import Trailers from "./Trailers";
import Sections from "./Sections";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c0f0f] text-white">
      <NavBar />
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('../../fotos/fran_estudio.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <h1 className="select-none text-5xl font-bold text-[#e6d227]">
            Musical Producer
          </h1>
        </div>
      </section>

      {/* Sections */}
      <Sections />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
