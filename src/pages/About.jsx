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
            Hi! I'm Franco Cuatto, a passionate cinematic music producer
            dedicated to creating unforgettable soundscapes that bring stories
            to life. With a deep love for storytelling and a profound
            understanding of music's emotional impact, I specialize in composing
            and producing scores that resonate with audiences and enhance the
            narrative experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
