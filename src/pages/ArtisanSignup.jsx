import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/Modals/ConfirmationModal';
import axios from 'axios';

const ArtisanSignup = () => {
  const [formData, setFormData] = useState({
    username: '', 
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    nationalIdNumber: '',
    profession: '',
    yearsOfExperience: '',
    locationRegion: '',
    locationCity: '',
    idVerificationFront: '',
    idVerificationBack: '',
    profilePhoto: '',
    bio: '',
  });
  
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!formData.nationalIdNumber) {
      setError('National ID Number is required.');
      return;
    }
    
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        // We only send the fields that the RegisterSerializer expects
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone,
        user_type: 'artisan',
        national_id_number: formData.nationalIdNumber,
      });

      if (response.status === 201) {
        setIsConfirmationModalOpen(true);
      }
    } catch (err) {
      console.error('Registration failed:', err.response.data);
      if (err.response && err.response.data) {
        setError(Object.values(err.response.data).flat().join(' '));
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    navigate('/dashboard/artisan');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Artisan Sign-Up</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Tell us about your services.
        </p>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
          {/* Basic Info Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Basic Info:</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="johndoe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="+233 24 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="••••••••"
              />
            </div>
          </div>
          {/* Professional Details Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Professional Details:</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">National ID Number</label>
              <input
                type="text"
                name="nationalIdNumber"
                value={formData.nationalIdNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="GHA-123456789-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio / Description</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
              ></textarea>
            </div>
          </div>
          {/* Verification and Bio Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Verification & Bio:</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Verification (Front)</label>
              <input type="file" name="idVerificationFront" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ID Verification (Back)</label>
              <input type="file" name="idVerificationBack" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
              <input type="file" name="profilePhoto" onChange={handleFileChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
            </div>
          </div>
          {/* Submit Button */}
          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
            >
              Create Artisan Profile
            </button>
          </div>
        </form>
      </div>

      {isConfirmationModalOpen && (
        <ConfirmationModal
          onClose={handleCloseConfirmationModal}
          title="Profile Submitted for Verification"
          message="Thank you for joining HandyHub as an artisan. We are reviewing your details to verify your profile. This may take up to 24 hours."
          buttonText="Go to Dashboard"
          buttonPath="/dashboard/artisan"
        />
      )}
    </div>
  );
};

export default ArtisanSignup;
