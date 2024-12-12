import React from "react";
import Slider from "react-slick";
import { Music, Mic2, Calendar } from "lucide-react";
import NavBar from "../../components/NavBar";

// Importa los estilos CSS de slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Datos de ejemplo para los proyectos musicales
const musicProjects = [
  {
    id: 1,
    title: "Melodías del Alma",
    artist: "Luna Azul",
    releaseDate: "2023-05-15",
    coverImage: "../fotos/estudio.jpg",
  },
  {
    id: 2,
    title: "Ritmos Urbanos",
    artist: "El Pulsador",
    releaseDate: "2023-07-22",
    coverImage: "../fotos/estudio.jpg",
  },
  {
    id: 3,
    title: "Sinfonía Estelar",
    artist: "Nebulosa Sonora",
    releaseDate: "2023-09-10",
    coverImage: "../fotos/estudio.jpg",
  },
  {
    id: 4,
    title: "Acústica Profunda",
    artist: "Ecos del Bosque",
    releaseDate: "2023-11-05",
    coverImage: "../fotos/estudio.jpg",
  },
];

function SectionsView() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#0c0f0f]">
      <NavBar />
      <div className="mx-auto w-full max-w-4xl p-4 px-12">
        <Slider {...settings}>
          {musicProjects.map((project) => (
            <div key={project.id} className="group px-2">
              <div className="overflow-hidden rounded-lg bg-[#1F2937] text-white shadow-md transition-colors group-hover:text-[#e6d227]">
                <img
                  src={project.coverImage}
                  alt={`Portada de ${project.title}`}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    {project.title}
                  </h3>
                  <div className="mb-2 flex items-center">
                    <Mic2 className="mr-2 h-4 w-4" />
                    <span>{project.artist}</span>
                  </div>
                  <div className="mb-4 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{project.releaseDate}</span>
                  </div>
                  <button className="ring-offset-background focus-visible:ring-ring border-input inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#0c0f0f] px-3 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:bg-[#e6d227] group-hover:text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <Music className="mr-2 h-4 w-4" />
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SectionsView;
