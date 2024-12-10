import React from "react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20" id="about">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 ring-2 ring-[#e6d227]">
          <img
            src="../../public/fotos/fran_bateria.jpg"
            alt="Foto"
            // className="rounded-full w-64 h-64 mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 px-8 text-[#e6d227]">About Me</h2>
          <p className="mb-4 px-8">
          Hi! I'm Franco Cuatto, a passionate cinematic music producer dedicated to creating unforgettable soundscapes that bring stories to life. 
          With a deep love for storytelling and a profound understanding of music's emotional impact, I specialize in composing and producing 
          scores that resonate with audiences and enhance the narrative experience.
          </p>
          {/* <Button variant="outline">
            <Mic2 className="mr-2 h-4 w-4" /> Read Full Bio
          </Button> */}
        </div>
      </div>
    </section>
  )
};

export default About;
