import React from 'react';
import useAuth from '../useAuth'; 

// Reusable card component for services and bookings
const Card = ({ children, title, subtitle, className = '' }) => (
  <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
    {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    {children}
  </div>
);

const ArtisanDashboard = () => {
  const user = useAuth(); // Use the hook to get user data

  const pendingBookings = [
    { customer: 'Matilda Esenam Gbeve', service: 'Painting a wall', date: '10th August, 2025', location: 'Adenta, Accra', img: 'https://placehold.co/100x100/a855f7/ffffff?text=Matilda' },
    { customer: 'Tilly Bright', service: 'Painting a church', date: '15th August, 2025', location: 'Tema, Comm 2', img: 'https://placehold.co/100x100/f97316/ffffff?text=Tilly' },
    { customer: 'Ximena Majorie', service: 'Painting a room', date: '20th August, 2025', location: 'Golf City, Tema', img: 'https://placehold.co/100x100/22c55e/ffffff?text=Ximena' },
  ];

  return (
    <div>
      {/* Verification Banner */}
      <div className="bg-green-500 text-white p-4 rounded-lg shadow-md mb-6 text-center">
        <h2 className="font-bold text-lg">Congratulations, {user?.firstName || 'User'}! Your profile has been verified!</h2>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.firstName || 'User'}!</h1>
      
      {/* Pending Bookings Section */}
      <Card title="Pending Job Requests" className="mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto">
          {pendingBookings.map((booking, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-gray-50 rounded-lg overflow-hidden shadow-sm p-4 text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <img src={booking.img} alt={booking.customer} className="w-10 h-10 rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-700">{booking.customer}</h4>
                  <p className="text-gray-500 text-xs">{booking.location}</p>
                </div>
              </div>
              <p className="mt-2 font-semibold text-gray-600">{booking.service}</p>
              <p className="text-gray-500 text-xs">Date: {booking.date}</p>
              <div className="mt-4 flex space-x-2">
                <button className="bg-green-500 text-white text-xs px-4 py-2 rounded-lg hover:bg-green-600">Accept</button>
                <button className="bg-red-500 text-white text-xs px-4 py-2 rounded-lg hover:bg-red-600">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Profile Edit Form Section */}
      <Card title="Edit My Public Profile" className="mb-6">
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Business Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm" />
          </div>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">Save Changes</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ArtisanDashboard;