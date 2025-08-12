import React from 'react';
import { Link } from 'react-router-dom';

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
      <section className="bg-gray-50 py-12 md:py-20 text-center">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Connect with trusted <span className="text-orange-500">help</span>, today!
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600">
            Find verified local plumbers, electricians, and more.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full max-w-2xl">
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full px-4 py-2 border-b-2 md:border-r-2 md:border-b-0 border-gray-200 rounded-t-full md:rounded-l-full md:rounded-r-none focus:outline-none text-center"
              />
              <input
                type="text"
                placeholder="Where are you located?"
                className="w-full px-4 py-2 rounded-b-full md:rounded-r-full md:rounded-l-none focus:outline-none text-center"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4 md:mb-8">Explore popular services</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0">
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