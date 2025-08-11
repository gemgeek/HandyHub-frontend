import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder for a reusable ServiceCard component
const ServiceCard = ({ title, imgUrl }) => {
  return (
    <div className="relative w-48 h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Connect with trusted <span className="text-orange-500">help</span>, today!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find verified local plumbers, electricians, and more.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg flex items-center space-x-2 w-full max-w-2xl">
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full px-4 py-2 border-r-2 border-gray-200 rounded-l-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Where are you located?"
                className="w-full px-4 py-2 rounded-r-full focus:outline-none"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Explore popular services</h2>
          <div className="flex justify-center space-x-4 overflow-x-auto">
            <ServiceCard title="Private Chef" imgUrl="https://placehold.co/200x200/ef4444/ffffff?text=Chef" />
            <ServiceCard title="House Help" imgUrl="https://placehold.co/200x200/eab308/ffffff?text=House+Help" />
            <ServiceCard title="Plumber" imgUrl="https://placehold.co/200x200/22c55e/ffffff?text=Plumber" />
            <ServiceCard title="Electrician" imgUrl="https://placehold.co/200x200/0ea5e9/ffffff?text=Electrician" />
            <ServiceCard title="Hairstylist" imgUrl="https://placehold.co/200x200/a855f7/ffffff?text=Hairstylist" />
            <ServiceCard title="Painter" imgUrl="https://placehold.co/200x200/f97316/ffffff?text=Painter" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
