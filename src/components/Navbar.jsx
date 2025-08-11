import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center flex-1">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            <img src="/Handyhub-Logo2.png" alt="HandyHub Logo" className="h-10" />
          </Link>
          <div className="hidden md:flex flex-1 justify-center space-x-6 text-gray-600">
            <Link to="/about" className="hover:text-orange-500 transition-colors">
              About Us
            </Link>
            <Link to="/how-it-works" className="hover:text-orange-500 transition-colors">
              How It Works
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-orange-500 transition-colors">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;