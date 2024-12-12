import React, { useState } from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Para mostrar el estado del envío

  // Manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xjkvdlav", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Thank you for your message, I will contact you soon.");
      setFormData({ name: "", email: "", message: "" }); // Limpiar formulario
    } else {
      setStatus("There was an error sending the message. Try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#0c0f0f] py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 select-none text-center text-3xl font-bold text-[#e6d227]">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              name="email"
              className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm text-black"
              placeholder="Your email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              className="border-input bg-background flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm text-black"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="ring-offset-background focus-visible:ring-ring border-input inline-flex h-10 w-full select-none items-center justify-center gap-2 whitespace-nowrap rounded-md border bg-[#0c0f0f] px-4 py-2 text-sm font-medium text-[#e6d227] transition-colors hover:bg-[#e6d227] hover:text-black hover:ring-2 hover:ring-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            >
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
                className="lucide lucide-mail mr-2 h-4 w-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-white">{status}</p>}
        </div>
        <div className="mt-12 text-center">
          <h3 className="mb-4 select-none text-xl font-semibold text-[#e6d227]">
            Follow Me
          </h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/fran_cuatto?igsh=YWdiN2l5dzN5Mzll"
              className="hover:text-[#e6d227]"
              target="_blank"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-cuatto-988575184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="hover:text-[#e6d227]"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/bjs1dBT3iq7a1fAY/?mibextid=LQQJ4d"
              className="hover:text-[#e6d227]"
              target="_blank"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
