import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/Modals/ConfirmationModal'; // Import the reusable modal

const ArtisanSignup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profession: '',
    yearsOfExperience: '',
    locationRegion: '',
    locationCity: '',
    idVerificationFront: '',
    idVerificationBack: '',
    profilePhoto: '',
    bio: '',
  });

  // State to control the visibility of the confirmation modal
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we will add the logic to send this data to the backend API
    console.log('Artisan signup form submitted:', formData);
    
    // After a successful submission, show the confirmation modal
    setIsConfirmationModalOpen(true);
  };

  const handleCloseConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800">Artisan Sign-Up</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Tell us about your services.
        </p>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
          {/* ... (form fields are the same) ... */}
          {/* Basic Info Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Basic Info:</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
                placeholder="John Doe"
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
              <label className="block text-sm font-medium text-gray-700">Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location (Region)</label>
              <input
                type="text"
                name="locationRegion"
                value={formData.locationRegion}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location (City)</label>
              <input
                type="text"
                name="locationCity"
                value={formData.locationCity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm"
              />
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
