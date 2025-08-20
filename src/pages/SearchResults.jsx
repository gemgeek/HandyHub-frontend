import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

// Reusable card component for displaying an artisan's profile
const ArtisanCard = ({ name, services, location, isVerified }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">Services: {services}</p>
        <p className="text-gray-600">Location: {location}</p>
      </div>
      <div className="flex-none">
        {isVerified && (
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Verified
          </span>
        )}
        <button className="ml-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const service = searchParams.get('service');
  const location = searchParams.get('location');

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/artisans/', {
          params: {
            search: `${service} ${location}`,
            is_verified: true,
          }
        });
        setSearchResults(response.data);
      } catch (err) {
        setError("Failed to fetch artisans.");
        console.error("Error fetching artisans:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [service, location]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Search Results</h1>
      <p className="text-lg text-gray-600 mb-4">
        Showing results for "{service}" in "{location}".
      </p>
      {loading && <p>Loading artisans...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && searchResults.length === 0 && (
        <p>No artisans found. Please try a different search.</p>
      )}
      {!loading && !error && searchResults.map((artisan, index) => (
        <ArtisanCard
          key={index}
          name={artisan.business_name || artisan.user.username}
          services={artisan.services.map(s => s.name).join(', ')}
          location={artisan.locations.map(l => l.name).join(', ')}
          isVerified={artisan.is_verified}
        />
      ))}
    </div>
  );
};

export default SearchResults;