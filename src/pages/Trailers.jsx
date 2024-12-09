import React from "react";
import { PlayCircle, Disc3, Mic2, Mail } from "lucide-react";

const Trailers = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A groundbreaking project.",
      imgUrl: "/fotos/estudio.jpg",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "An innovative solution.",
      imgUrl: "/fotos/fran_bateria.jpg",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A revolutionary idea.",
      imgUrl: "/fotos/estudio.jpg",
    },
  ];

  return (
    <section id="trailers" className="bg-[#0c0f0f] py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#e6d227]">
          Trailers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg bg-gray-800"
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-400">{project.description}</p>
                <button className="ring-offset-background focus-visible:ring-ring border-input inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#e53c51] px-3 text-sm font-medium transition-colors hover:bg-[#e6d227] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-disc3 mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
                  </svg>
                  Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trailers;
