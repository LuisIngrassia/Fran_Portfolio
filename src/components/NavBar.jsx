import React from "react";


const NavBar = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Franco Cuatto</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#films" className="hover:text-gray-300">
              Films
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
