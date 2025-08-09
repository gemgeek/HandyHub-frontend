import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationModal = ({ title, message, buttonText, buttonPath, onClose }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClose();
    navigate(buttonPath);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="bg-orange-500 p-8 rounded-lg shadow-2xl w-full max-w-md relative text-center text-white">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{message}</p>
        <button
          onClick={handleClick}
          className="mt-8 py-3 px-8 bg-white text-orange-500 font-bold rounded-lg shadow-md hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
