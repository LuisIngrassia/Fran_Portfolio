import React from "react";


const NavBar = () => {
  return (
    <header className="container mx-auto px-4 py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#e53c51]">Franco Cuatto</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-[#e6d227] hover:text-[#e53c51]">
              Home
            </a>
          </li>
          <li>
            <a href="#trailers" className="text-[#e6d227] hover:text-[#e53c51]">
              Trailers
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#e6d227] hover:text-[#e53c51]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-[#e6d227] hover:text-[#e53c51]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
