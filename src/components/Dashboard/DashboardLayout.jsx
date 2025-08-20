import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../useAuth';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useAuth();

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="text-2xl font-bold md:block hidden">
          <img src="/Handyhub Logo.png" alt="HandyHub Logo" className="h-8" />
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-1 hidden md:flex items-center justify-end space-x-4">
          <button className="text-white hover:text-gray-200 transition-colors">
            {/* Bell Icon (placeholder) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.002 2.002 0 0118 14.5V11a6 6 0 00-6-6V3a2 2 0 00-2-2 2 2 0 00-2 2v2a6 6 0 00-6 6v3.5a2.002 2 0 01-.595 1.405L4 17h5m6 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m0 0a2 2 0 00-4 0m0 0H9" />
            </svg>
          </button>
          <button className="text-white hover:text-gray-200 transition-colors">
            {/* Power Off Icon (placeholder) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar for Desktop */}
        <aside className="w-64 bg-gray-800 text-white p-6 md:flex flex-col hidden">
          <div className="flex items-center space-x-4 mb-6">
            <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
            <span className="font-semibold text-lg">Hello, {user?.firstName || 'User'}!</span>
          </div>
          <div className="space-y-4">
            <Link to="/dashboard/customer" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>Dashboard</span></Link>
            <Link to="/dashboard/customer/profile" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>My Profile</span></Link>
            <Link to="/dashboard/customer/bookings" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>My Bookings</span></Link>
            <Link to="/dashboard/customer/favorites" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>Favorite Artisans</span></Link>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <aside className="md:hidden fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white p-6 flex flex-col">
            <button onClick={() => setIsSidebarOpen(false)} className="absolute top-2 right-2 text-gray-400">
              &times;
            </button>
            <div className="flex items-center space-x-4 mb-6">
              <img src="/Handyhub Logo.png" alt="HandyHub Logo" className="h-8" />
            </div>
            <div className="space-y-4">
              {/* Mobile menu items with onClick handler */}
              <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>Home</span></Link>
              <Link to="/dashboard/customer" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>Dashboard</span></Link>
              <Link to="/dashboard/customer/profile" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>My Profile</span></Link>
              <Link to="/dashboard/customer/bookings" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>My Bookings</span></Link>
              <Link to="/dashboard/customer/favorites" onClick={handleLinkClick} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors"><span>Favorite Artisans</span></Link>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;