import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
import Trailers from "./Trailers";



const Home = () => {
  return (
    <div className="min-h-screen bg-[#0c0f0f] text-white">
      <NavBar />
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4 text-[#e6d227]">Productor Musical</h2>
        <p className="text-xl mb-8 text-[#e53c51]">Soy .....</p>
      </section>

      {/* Films */}
      <Trailers/> 

      {/* About Section */}
      <About/>

      {/* Contact Section */}
      <Contact/>

      <Footer />
    </div>
  );
};

export default Home;
