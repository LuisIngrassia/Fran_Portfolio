import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-between items-center transition-colors duration-300 ${scroll ? 'bg-black' : 'bg-transparent'}`}>
      <h1 className="text-2xl font-bold text-[#e6d227]">Franco Cuatto</h1>
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <Menu />
          </button>
        </div>
        <ul className={`absolute text-end top-16 left-0 w-full md:static md:flex md:flex-row space-y-2 md:space-y-0 md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <a href="#home" className="block text-white hover:text-[#e6d227] py-2 px-4">
              Home
            </a>
          </li>
          <li>
            <a href="#sections" className="block text-white hover:text-[#e6d227] py-2 px-4">
              Sections
            </a>
          </li>
          <li>
            <a href="#about" className="block text-white hover:text-[#e6d227] py-2 px-4">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="scroll-smooth block text-white hover:text-[#e6d227] py-2 px-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;