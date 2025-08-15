import React from 'react';
import useAuth from '../useAuth'; 

// Reusable card component for services and bookings
const Card = ({ children, title, subtitle, className = '' }) => (
  <div className={`bg-white p-4 rounded-lg shadow-md ${className}`}>
    {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
    {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-x-auto">
      {children}
    </div>
  </div>
);

const CustomerDashboard = () => {
  const user = useAuth(); // Use the hook to get user data

  const recommendedServices = [
    { name: 'Shoemaker (Cobbler)', location: 'Tema, Ghana', img: 'https://placehold.co/200x200/22c55e/ffffff?text=Cobbler' },
    { name: 'Househelp', location: 'Ashaiman N/T', img: 'https://placehold.co/200x200/eab308/ffffff?text=Househelp' },
    { name: 'Mechanic', location: 'Golf City, H/T', img: 'https://placehold.co/200x200/0ea5e9/ffffff?text=Mechanic' },
    { name: 'Plumber', location: 'Tema, Ghana', img: 'https://placehold.co/200x200/ef4444/ffffff?text=Plumber' },
  ];

  const recentBookings = [
    { service: 'Hair dressing', artisan: 'Jane Doe', date: '10th August, 2025', status: 'Pending', img: 'https://placehold.co/100x100/a855f7/ffffff?text=Jane' },
    { service: 'Plumbing Repair', artisan: 'John Doe', date: '7th August, 2025', status: 'Completed', img: 'https://placehold.co/100x100/f97316/ffffff?text=John' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.firstName || 'User'}!</h1>
      
      {/* Recommended Services Section */}
      <Card title="Recommended services based on your location">
        {recommendedServices.map((service, index) => (
          <div key={index} className="flex-shrink-0 w-48 md:w-64 bg-gray-50 rounded-lg overflow-hidden shadow-sm p-2 text-sm">
            <img src={service.img} alt={service.name} className="w-full h-32 object-cover rounded mb-2" />
            <h4 className="font-bold">{service.name}</h4>
            <p className="text-gray-500 text-xs">{service.location}</p>
          </div>
        ))}
      </Card>

      {/* Recent Bookings Section */}
      <Card title="My Recent Bookings" subtitle="Here are your last 2 bookings.">
        {recentBookings.map((booking, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-gray-50 rounded-lg overflow-hidden shadow-sm p-4 text-sm">
            <h4 className="font-semibold text-gray-700">{booking.service}</h4>
            <p className="mt-1 text-gray-500">Artisan: {booking.artisan}</p>
            <p className="text-gray-500">Date: {booking.date}</p>
            <p className="text-gray-500">Status: <span className={booking.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}>{booking.status}</span></p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CustomerDashboard;
