import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ConfirmationModal from '../components/Modals/ConfirmationModal';

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    username: '', // Added username field for the API
    email: '',
    phone: '',
    location: '', // We'll handle this later for now
    password: '',
    confirmPassword: '',
  });

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [error, setError] = useState(''); // State to hold any error messages

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    // Clear previous errors
    setError('');

    try {
      // Send the data to your Django backend's registration endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        user_type: 'customer',
        // Other customer-specific data will be sent here later
      });
      
      // If registration is successful, show the confirmation modal
      if (response.status === 201) {
        setIsConfirmationModalOpen(true);
      }
    } catch (err) {
      // If there's an error from the backend, display it
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
    navigate('/dashboard/customer');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Signup as a Customer</h2>
        <p className="mt-2 text-sm text-center text-gray-500">
          Use your email to create an account.
        </p>
        
        {/* Display error message if it exists */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="+233 24 123 4567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="Accra, Tema"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>

      {isConfirmationModalOpen && (
        <ConfirmationModal
          onClose={handleCloseConfirmationModal}
          title="Welcome to HandyHub!"
          message="Your account has been created successfully. You can now browse and book trusted artisans."
          buttonText="Go to Dashboard"
          buttonPath="/dashboard/customer" // This will navigate to the customer dashboard
        />
      )}
    </div>
  );
};

export default CustomerSignup;
