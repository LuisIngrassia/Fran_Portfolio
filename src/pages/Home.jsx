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
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4 text-[#e6d227]">Musical Producer</h2>
        <p className="text-2xl mb-8 text-white font-serif">Franco Cuatto</p>
      </section>

      {/* Trailers */}
      {/* <Trailers/>  */}

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
