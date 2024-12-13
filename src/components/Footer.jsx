import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-6 text-center text-gray-400">
      <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <p className="select-none">&copy; 2024 Franco Cuatto</p>
        <div className="flex items-center">
          <Mail className="mr-2 h-4 w-4" />
          francocuattomusica@gmail.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
