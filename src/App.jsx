import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
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

// This layout will wrap all our pages.
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register/customer" element={<CustomerSignup />} />
          <Route path="/register/artisan" element={<ArtisanSignup />} />
          <Route path="/login" element={<Login />} /> {/* Add the new Login route */}
        </Route>
        <Route path="/dashboard/customer" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
        </Route>
        <Route path="/dashboard/artisan" element={<DashboardLayout />}>
          <Route index element={<ArtisanDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
