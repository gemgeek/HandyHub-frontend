import React from 'react';
import { Link } from 'react-router-dom';

const SignupModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800">Signup in seconds</h2>
          <p className="mt-2 text-gray-500">
            Use your email or another service to continue with HandyHub, it's free!
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link to="/register/customer" onClick={onClose} className="w-full flex justify-center py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors">
            I'm a Customer
          </Link>
          <Link to="/register/artisan" onClick={onClose} className="w-full flex justify-center py-3 px-4 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors">
            I'm an Artisan
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center">
          By continuing, you agree to HandyHub's <span className="text-orange-500">Terms of Use</span>. Read our <span className="text-orange-500">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignupModal;