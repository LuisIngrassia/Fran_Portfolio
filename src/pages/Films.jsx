import React from "react";
import {
  PlayCircle,
  Disc3,
  Mic2,
  Mail,
  Instagram,
  Twitter,
} from "lucide-react";

const Films = () => {
  return (<section id="films" className="bg-gray-900 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Films
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={`/placeholder.svg?height=200&width=400`}
              alt={`Album ${item}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Proyect Title {item}
              </h3>
              <p className="text-gray-400 mb-4">
                A brief description of the proyect.
              </p>
              <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-disc3 mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
                </svg>{" "}
                Listen Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>);
};

export default Films;
