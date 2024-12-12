import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (el) => {
    const headerHeight = document.querySelector("header").offsetHeight;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
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
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-colors duration-300 ${
        scroll ? "bg-black" : "bg-transparent"
      }`}
    >
      <h1 className="select-none text-2xl font-bold text-[#e6d227]">
        Franco Cuatto
      </h1>
      <nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <Menu />
          </button>
        </div>
        <ul
          className={`absolute left-0 top-16 w-full select-none space-y-2 text-end md:static md:flex md:flex-row md:space-x-4 md:space-y-0 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <HashLink
              to="/#home"
              className="block px-4 py-2 text-white hover:text-[#e6d227]"
              scroll={scrollTo}
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#sections"
              className="block px-4 py-2 text-white hover:text-[#e6d227]"
              scroll={scrollTo}
            >
              Sections
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#about"
              className="block px-4 py-2 text-white hover:text-[#e6d227]"
              scroll={scrollTo}
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              to="/#contact"
              className="block px-4 py-2 text-white hover:text-[#e6d227]"
              scroll={scrollTo}
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
