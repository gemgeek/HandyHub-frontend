import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import CustomerSignup from './pages/CustomerSignup';
import DashboardLayout from './components/Dashboard/DashboardLayout'; // Import the new layout
import CustomerDashboard from './pages/CustomerDashboard'; // Import the new dashboard page

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
        </Route>
        {/* New route for the Customer Dashboard */}
        <Route path="/dashboard/customer" element={<DashboardLayout />}>
          <Route index element={<CustomerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;