import React from "react";

const About = () => {
  return (
    <section className="container mx-auto select-none px-4 py-20" id="about">
      <div className="flex flex-col items-center md:flex-row">
        <div className="mb-8 ring-2 ring-[#e6d227] md:mb-0 md:w-1/2">
          <img src="../../fotos/fran_bateria.JPG" alt="Foto" />
        </div>
        <div className="md:w-1/2">
          <h2 className="mb-4 px-8 text-3xl font-bold text-[#e6d227]">
            About Me
          </h2>
          <p className="mb-4 px-8">
            Hi! I’m Fran, a passionate film-scoring composer dedicated to
            crafting unforgettable musical experiences for the screen. With a
            strong foundation in cinematic music and a deep love for
            storytelling, I’m currently pursuing a degree in Film Scoring and
            Music Production at UCA (Universidad Católica Argentina). I
            specialize in creating scores that bring characters, emotions, and
            narratives to life, enhancing every visual journey with unique and
            captivating sounds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
