import React from "react";

const Sections = () => {
  const ramas = [
    {
      id: 1,
      title: "Film Scoring",
      description:
        "The art of creating music that enhances emotions. The key to making stories felt, lived, and remembered forever.",
      imgUrl: "/sections/filmscoring.jpg",
      hacia: "sections#film",
    },
    {
      id: 2,
      title: "Sound Design",
      description:
        "A powerful tool to communicate emotions, reinforce messages, and connect with whoever you aim to reach.",
      imgUrl: "/sections/sound_design.jpg",
      hacia: "/sections#sound",
    },
    {
      id: 3,
      title: "Compositions",
      description: "The creation of something unique and unrepeatable.",
      imgUrl: "/sections/compo.jpeg",
      hacia: "sections#compositions",
    },
    {
      id: 4,
      title: "Mix & Mastering",
      description:
        "The final touch to ensure your project sounds professional and polished, enhancing and elevating your unique creation.",
      imgUrl: "/fotos/estudio.jpg",
      hacia: "sections#mastering",
    },
  ];

  return (
    <section id="sections" className="select-none bg-[#0c0f0f] py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#e6d227]">
          Sections
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ramas.map((section) => (
            <div key={section.id} className="group relative">
              {/* {section.id} */}
              <a href={section.hacia}>
                <div className="absolute inset-0 rounded-lg bg-[#e6d227] opacity-0 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-gray-800 hover:text-[#e6d227]">
                  <img
                    src={section.imgUrl}
                    alt={section.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex-grow p-4">
                    <h3 className="mb-2 text-xl font-semibold">
                      {section.title}
                    </h3>
                    <p className="mb-4 text-gray-400">{section.description}</p>
                  </div>
                  <div className="p-4">
                    <button className="ring-offset-background focus-visible:ring-ring border-input inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#0c0f0f] px-3 text-sm font-medium transition-colors hover:bg-[#e6d227] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
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
                        className="lucide lucide-eye"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View now
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
