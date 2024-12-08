import React from "react";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20" id="about">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Foto"
            className="rounded-full w-64 h-64 mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Franco Cuatto</h2>
          <p className="mb-4">
            Texto texto texto texto texto
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
