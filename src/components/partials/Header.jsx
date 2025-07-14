import React from "react";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bubble Bliss
            </h1>
            <span>🧋</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-500 transition ">
              Home
            </a>
            <a href="#types" className="hover:text-pink-500 transition">
              Types
            </a>
            <a href="#toppings" className="hover:text-pink-500 transition">
              Toppings
            </a>
            <a href="#benefits" className="hover:text-pink-500 transition">
              Benefits
            </a>
            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-2xl">
          <a
            href="#home"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#types"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href="#toppings"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href="#contact"
            className="hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
