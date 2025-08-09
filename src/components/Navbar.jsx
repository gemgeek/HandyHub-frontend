import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-orange-500">
            HandyHub
          </Link>
        </div>
        {/* Center: Links */}
        <div className="flex-1 flex justify-center space-x-6 text-gray-600">
          <Link to="/about" className="hover:text-orange-500 transition-colors">
            About Us
          </Link>
          <Link to="/how-it-works" className="hover:text-orange-500 transition-colors">
            How It Works
          </Link> 
        </div>
        {/* Right: Auth */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <Link to="/login" className="text-gray-600 hover:text-orange-500 transition-colors">
            Login
          </Link>
          <Link
            to="/register/customer"
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
