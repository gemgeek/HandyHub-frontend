import React, { useState } from 'react';
import SignupModal from '../components/Modals/SignupModal';

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* This is a basic background placeholder. Later this will be the homepage. */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">This is the Signup Page</h1>
        <p className="mt-2">The modal should appear on top of this.</p>
      </div>
      {isModalOpen && <SignupModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Signup;
