import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
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
    setError('');

    try {
      // Send the data to your Django backend's login endpoint
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        const { token, user_id, user_type, first_name, last_name } = response.data;
        console.log('Login successful. Token:', token);

        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify({
          id: user_id,
          token: token,
          userType: user_type,
          firstName: first_name,
          lastName: last_name,
        }));

        onClose(); // Close the modal first

        if (user_type === 'customer') {
          navigate('/dashboard/customer');
        } else if (user_type === 'artisan') {
          navigate('/dashboard/artisan');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Login failed:', err.response.data);
      if (err.response && err.response.data) {
        setError(Object.values(err.response.data).flat().join(' '));
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
          &times;
        </button>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800">Login to HandyHub</h2>
          <p className="mt-2 text-gray-500">
            Use your username and password to log in.
          </p>
        </div>
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
          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" onClick={onClose} className="text-orange-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;