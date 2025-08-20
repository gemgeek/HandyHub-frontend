import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Placeholder for a reusable ServiceCard component
const ServiceCard = ({ title, imgUrl }) => {
  return (
    <div className="flex-none w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
      <img src={imgUrl || `https://placehold.co/256x256/ef4444/ffffff?text=${title}`} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start p-4 pt-2">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    service: '',
    location: '',
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchData.service || searchData.location) {
      navigate(`/search-results?service=${searchData.service}&location=${searchData.location}`);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/services/categories/');
        setServices(response.data);
      } catch (err) {
        setError("Failed to fetch services.");
        console.error("Error fetching service categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

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
          <form onSubmit={handleSearchSubmit} className="mt-8 flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 w-full max-w-2xl">
              <input
                type="text"
                name="service"
                value={searchData.service}
                onChange={handleSearchChange}
                placeholder="What service do you need?"
                className="w-full px-4 py-2 border-b-2 md:border-r-2 md:border-b-0 border-gray-200 rounded-t-full md:rounded-l-full md:rounded-r-none focus:outline-none text-center"
              />
              <input
                type="text"
                name="location"
                value={searchData.location}
                onChange={handleSearchChange}
                placeholder="Where are you located?"
                className="w-full px-4 py-2 rounded-b-full md:rounded-r-full md:rounded-l-none focus:outline-none text-center"
              />
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Find Now
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-2xl font-bold mb-4 md:mb-8">Explore popular services</h2>
          
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hidden md:block z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div ref={scrollRef} className="flex space-x-4 overflow-x-scroll no-scrollbar">
            {loading && <p>Loading services...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && services.map((service) => (
              <ServiceCard key={service.id} title={service.name} imgUrl={service.image_url} />
            ))}
          </div>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hidden md:block z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;