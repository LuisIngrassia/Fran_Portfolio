import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import {
  PlayCircle,
  Disc3,
  Mic2,
  Mail,
  Instagram,
  Twitter,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">Productor Musical</h2>
        <p className="text-xl mb-8">Soy .....</p>
      </section>

      {/* Featured Works */}
      <section id="works" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Works
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
                    Album Title {item}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of the album and its style.
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
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="DJ Beatsmith"
              className="rounded-full w-64 h-64 mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Franco Cuatto</h2>
            <p className="mb-4">
              With over a decade of experience in the music industry, DJ
              Beatsmith has been pushing the boundaries of electronic and
              hip-hop music. Known for innovative sound design and catchy
              melodies, Beatsmith's tracks have been featured in major festivals
              and radio stations worldwide.
            </p>
            {/* <Button variant="outline">
              <Mic2 className="mr-2 h-4 w-4" /> Read Full Bio
            </Button> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your Name"
                type="text"
              ></input>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your email"
                type="email"
              ></input>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Message"
              ></textarea>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-purple-600 hover:bg-purple-700">
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
                  class="lucide lucide-mail mr-2 h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-purple-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-purple-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
