import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Music, Mic2, Disc3, Film, Calendar } from "lucide-react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { HashLink } from "react-router-hash-link"; // Importar HashLink
import { useLocation } from "react-router-dom"; // Importar useLocation

import { film } from "./data/film";
import { compositions } from "./data/compositions";
import { mastering } from "./data/mastering";
import { sound } from "./data/sound";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SectionsView() {
  const [activeSection, setActiveSection] = useState("film");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const labelsRef = useRef([]);
  const containerRef = useRef(null);
  const location = useLocation(); // Para capturar el hash de la URL

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

  const projectData = {
    film,
    compositions,
    mastering,
    sound,
  };

  // Detecta cambios en el hash y actualiza el activeSection
  useEffect(() => {
    const sectionFromHash = location.hash.replace("#", "");
    if (
      ["film", "sound", "compositions", "mastering"].includes(sectionFromHash)
    ) {
      setActiveSection(sectionFromHash);
    }
  }, [location.hash]); // Reaccionar cuando cambia el hash de la URL

  const updateUnderline = () => {
    const activeIndex = ["film", "sound", "compositions", "mastering"].indexOf(
      activeSection,
    );

    if (labelsRef.current[activeIndex]) {
      const activeElement = labelsRef.current[activeIndex];
      const parent = activeElement.parentElement; // Contenedor con space-x-6

      const { offsetLeft: elementLeft, offsetWidth } = activeElement;
      const { offsetLeft: parentLeft } = parent;

      setUnderlineStyle({
        width: `${offsetWidth}px`,
        left: `${elementLeft - parentLeft}px`, // Ajustar con respecto al contenedor padre
      });
    }
  };

  // Actualizamos el subrayado cuando activeSection o location.hash cambia
  useEffect(() => {
    updateUnderline(); // Calcular el subrayado cuando activeSection cambia
    window.addEventListener("resize", updateUnderline); // Agregar listener de resize

    return () => {
      window.removeEventListener("resize", updateUnderline); // Limpiar el listener
    };
  }, [activeSection, location.hash]); // Recalcular el subrayado al cambiar activeSection o el hash

  const handleSectionClick = (value) => {
    setActiveSection(value);
  };

  return (
    <section className="flex min-h-screen flex-col items-start justify-start bg-[#0c0f0f] pt-16">
      <NavBar />
      <div className="mt-6 w-full flex-1 select-none p-4 px-12">
        <div className="relative my-6">
          <div className="relative flex justify-start py-2 text-lg text-white">
            {[
              { label: "Film Scoring", value: "film" },
              { label: "Sound Design", value: "sound" },
              { label: "Compositions", value: "compositions" },
              { label: "Mix & Mastering", value: "mastering" },
            ].map(({ label, value }, index) => (
              <HashLink
                key={value}
                to={`#${value}`}
                className={`relative ml-2 mr-4 cursor-pointer ${activeSection === value ? "font-bold" : ""}`}
                onClick={() => handleSectionClick(value)}
                ref={(el) => (labelsRef.current[index] = el)} // Asignar ref a cada HashLink
              >
                {label}
              </HashLink>
            ))}
            <div
              className="absolute bottom-0 mt-6 h-1 bg-[#e6d227] transition-all duration-300"
              style={underlineStyle}
            ></div>
          </div>
        </div>
        <Slider {...settings}>
          {projectData[activeSection].map((project) => (
            <div key={project.id} className="group px-2">
              <a href={project.goto} target="_blank">
                <div className="overflow-hidden rounded-lg bg-[#1F2937] text-white shadow-md transition-colors group-hover:text-[#e6d227]">
                  <img
                    src={project.coverImage}
                    alt={`Portada de ${project.title}`}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      {project.title}
                    </h3>
                    <div className="mb-2 flex items-center">
                      <Mic2 className="mr-2 h-4 w-4" />
                      <span>{project.artist}</span>
                    </div>
                    <div className="mb-2 flex items-center">
                      <Disc3 className="mr-2 h-4 w-4" />
                      <span>{project.producers}</span>
                    </div>
                    <div>
                      {project.type && (
                        <div className="mb-4 flex items-center">
                          <Film className="mr-2 h-4 w-4" />
                          <span>{project.type}</span>
                        </div>
                      )}
                      {project.releaseDate && (
                        <div className="mb-4 flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{project.releaseDate}</span>
                        </div>
                      )}
                    </div>
                    <button className="ring-offset-background focus-visible:ring-ring border-input inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#0c0f0f] px-3 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:bg-[#e6d227] group-hover:text-black [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                      <Music className="mr-2 h-4 w-4" />
                      Listen Now
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </section>
  );
}

export default SectionsView;
