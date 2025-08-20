import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../useAuth';

const ArtisanProfilePage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    phoneNumber: '',
    bio: '',
    profession: '',
    yearsOfExperience: '',
    locationRegion: '',
    locationCity: '',
    nationalIdNumber: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const user = useAuth();

  useEffect(() => {
    // Fetch artisan profile data on component mount
    const fetchProfile = async () => {
      if (user && user.userType === 'artisan') {
        try {
          // Send the authentication token with the request
          const response = await axios.get(`http://127.0.0.1:8000/api/profiles/artisan/`, {
            headers: { Authorization: `Token ${user.token}` },
          });
          const profile = response.data;
          
          // Pre-fill form with fetched data
          setFormData({
            businessName: profile.business_name || '',
            phoneNumber: profile.user.phone_number || '',
            bio: profile.bio || '',
            nationalIdNumber: profile.national_id_number || '',
            // These fields are not yet stored in the backend, but we keep them here for the form
            profession: '',
            yearsOfExperience: '',
            locationRegion: '',
            locationCity: '',
          });
        } catch (err) {
          setError('Failed to fetch profile data.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (user && user.userType === 'artisan') {
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/profiles/artisan/`, {
          // We only send the fields that the ArtisanProfileSerializer expects
          business_name: formData.businessName,
          bio: formData.bio,
          national_id_number: formData.nationalIdNumber,
          // We'll update other profile details later
        }, {
          headers: { Authorization: `Token ${user.token}` },
        });
        setSuccess('Profile updated successfully!');
        // Update the user object in local storage to reflect the changes
        const updatedUser = { ...user, firstName: formData.businessName.split(' ')[0] || user.firstName };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } catch (err) {
        setError('Failed to update profile.');
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading profile...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">{error}</div>}
      {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">{success}</div>}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="John Doe Services"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="+233 24 123 4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="Tell us about your skills and experience..."
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">National ID Number</label>
          <input
            type="text"
            name="nationalIdNumber"
            value={formData.nationalIdNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            placeholder="GHA-123456789-0"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArtisanProfilePage;