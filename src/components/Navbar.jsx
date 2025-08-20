import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo and Desktop Links */}
        <div className="flex items-center flex-1">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            <img src="/Handyhub-Logo2.png" alt="HandyHub Logo" className="h-10" />
          </Link>
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-gray-600">
            <Link to="/about-us" className="hover:text-orange-500 transition-colors">
              About Us
            </Link>
            <Link to="/how-it-works" className="hover:text-orange-500 transition-colors">
              How It Works
            </Link>
          </div>
        </div>

        {/* Desktop Login/Signup Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            Login
          </button>
          <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">
              About Us
            </Link>
            <Link to="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">
              How It Works
            </Link>
            <button
              onClick={onLoginClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700"
            >
              Login
            </button>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-orange-500 hover:bg-orange-600 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
