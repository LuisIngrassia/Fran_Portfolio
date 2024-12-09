import React from "react";

import {
    PlayCircle,
    Disc3,
    Mic2,
    Mail,
    Instagram,
    Linkedin,
    Facebook,
    Link,
  } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0c0f0f] py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <input
            className="text-black flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your Name"
            type="text"
          ></input>
          <input
            className="text-black  flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
            type="email"
          ></input>
          <textarea
            className="text-black flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Message"
          ></textarea>
          <button className="text-black inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-[#e6d227] hover:bg-[#e53c51]">
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
          <a href="https://www.instagram.com/fran_cuatto?igsh=YWdiN2l5dzN5Mzll" className="hover:text-[#e6d227]" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/franco-cuatto-988575184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-[#e6d227]" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://www.facebook.com/share/bjs1dBT3iq7a1fAY/?mibextid=LQQJ4d" className="hover:text-[#e6d227]" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Contact;
