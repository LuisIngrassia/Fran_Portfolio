import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
import Trailers from "./Trailers";
import Sections from "./Sections";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c0f0f] text-white">
      <NavBar />
      {/* Hero Section */}
      <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('../../public/fotos/fran_estudio.jpeg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-5xl font-bold text-[#e6d227]">Musical Producer</h1>
          {/* <p className="text-2xl mb-8 text-white font-serif">Franco Cuatto</p> */}
        </div>
      </section>

      {/* Sections */}
      <Sections/>


      {/* About Section */}
      <About/>

      {/* Contact Section */}
      <Contact/>

      <Footer />
    </div>
  );
};

export default Home;
