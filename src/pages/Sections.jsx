import React from "react";
import {Eye} from "lucide-react";

const Sections = () => {
    const ramas = [
        { id: 1, title: "Filmscoring", description: "The art of creating music that enhances emotions. The key to making stories felt, lived, and remembered forever.", imgUrl: "/public/sections/filmscoring.jpg", hacia:"Filmscoring"},
        { id: 2, title: "Commercials", description: "A powerful tool to communicate emotions, reinforce messages, and connect with whoever you aim to reach.", imgUrl: "/public/sections/commercials.jpg", hacia:"Commercials"},
        { id: 3, title: "Compositions", description: "The creation of something unique and unrepeatable.", imgUrl: "/public/sections/compo.jpeg", hacia:"Compositions" },
        { id: 4, title: "Mix & Mastering", description: "The final touch to ensure your project sounds professional and polished, enhancing and elevating your unique creation.", imgUrl: "/public/fotos/estudio.jpg", hacia:"Mastering" },
      ];

    return (
        <section id="sections" className="bg-[#0c0f0f] py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-[#e6d227]">
      Sections
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {ramas.map((section) => (
        <div key={section.id} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
          <img
            src={section.imgUrl}
            alt={section.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-400 mb-4">{section.description}</p>
          </div>
          <div className="p-4">
            <a href={section.hacia}>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-[#0c0f0f] hover:bg-[#e6d227] hover:text-black h-9 rounded-md px-3">
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" 
                stroke-linejoin="round" className="lucide lucide-eye">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                  <circle cx="12" cy="12" r="3"/>
              </svg>
              View now
            </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    );
}

export default Sections;

