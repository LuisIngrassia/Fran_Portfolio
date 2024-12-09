import React from "react";


const NavBar = () => {
  return (
    <header className="container mx-auto px-4 py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#e6d227]"></h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-[#e6d227]">
              Home
            </a>
          </li>
          <li>
            <a href="#sections" className="text-white hover:text-[#e6d227]">
              Sections
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-[#e6d227]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-[#e6d227]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
