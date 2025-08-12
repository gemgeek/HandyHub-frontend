import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import CustomerSignup from './pages/CustomerSignup';
import ArtisanSignup from './pages/ArtisanSignup';
import Login from './pages/Login'; 
import DashboardLayout from './components/Dashboard/DashboardLayout';
import CustomerDashboard from './pages/CustomerDashboard';
import ArtisanDashboard from './pages/ArtisanDashboard';
import ArtisanDashboardLayout from './components/Dashboard/ArtisanDashboardLayout';
import './index.css'; 

// This layout will wrap all our pages.
const MainLayout = ({ onLoginClick }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar onLoginClick={onLoginClick} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => setIsLoginModalOpen(true);
  const handleCloseLoginModal = () => setIsLoginModalOpen(false);

  return (
    <BrowserRouter>
      {isLoginModalOpen && <Login onClose={handleCloseLoginModal} />}
      <Routes>
        <Route path="/" element={<MainLayout onLoginClick={handleOpenLoginModal} />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register/customer" element={<CustomerSignup />} />
          <Route path="/register/artisan" element={<ArtisanSignup />} />
        </Route>
        {/* Route for the Customer Dashboard using its dedicated layout */}
        <Route path="/dashboard/customer" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
        </Route>
        {/* Route for the Artisan Dashboard using its dedicated layout */}
        <Route path="/dashboard/artisan" element={<ArtisanDashboardLayout />}>
          <Route index element={<ArtisanDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

