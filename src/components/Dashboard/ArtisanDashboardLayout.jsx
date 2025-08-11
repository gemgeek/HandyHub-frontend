import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ArtisanDashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar (reusable) */}
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center shadow-md">
        <Link to="/" className="text-2xl font-bold">HandyHub</Link>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-200 transition-colors">
            {/* Bell Icon (placeholder) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.002 2.002 0 0118 14.5V11a6 6 0 00-6-6V3a2 2 0 00-2-2 2 2 0 00-2 2v2a6 6 0 00-6 6v3.5a2.002 2.002 0 01-.595 1.405L4 17h5m6 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0m0 0a2 2 0 00-4 0m0 0H9" />
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

      <div className="flex flex-1">
        {/* Left Sidebar (Artisan-specific) */}
        <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
          <div className="flex items-center space-x-4 mb-6">
            <img src="https://placehold.co/40x40" alt="User Avatar" className="rounded-full" />
            <span className="font-semibold text-lg">Hello, John Doe</span>
          </div>
          <div className="space-y-4">
            <Link to="/dashboard/artisan" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7-2 2" />
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/artisan/profile" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>My Profile</span>
            </Link>
            <Link to="/dashboard/artisan/services" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M10 16h.01" />
              </svg>
              <span>My Services</span>
            </Link>
            <Link to="/dashboard/artisan/reviews" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.05 13.05a1.5 1.5 0 01-2.121 2.121l-5.657-5.657a1.5 1.5 0 010-2.121L12 3.05a1.5 1.5 0 012.121 0l5.657 5.657a1.5 1.5 0 010 2.121L11.05 13.05z" />
              </svg>
              <span>My Reviews</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboardLayout;