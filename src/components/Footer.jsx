import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
      <p className="flex items-center justify-center">
        &copy; 2024 Franco Cuatto
        <span className="mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
        francocuattomusica@gmail.com
      </p>
    </footer>
  );
};

export default Footer;
