import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import JobPortal from './pages/JobPortal';
import Events from './pages/Event';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import SidebarLayout from './pages/SidebarLayOut';
import AlumniProfile from './pages/AlumniProfile';
import './App.css';
import AluminiRegistration from "./components/Registration/RegAlumni";
import StudentRegistration from "./components/Registration/StudentRegistration";
import CollegeRegistration from "./components/Registration/CollegeRegistration";
import Login from "./components/Login";
import Register from './components/Register';

function AppContent() {
  const location = useLocation();

  // Logic to determine if Navbar and Footer should be hidden
  const shouldHideNavbarAndFooter = 
    location.pathname === '/alumnidirectory' || 
    location.pathname === '/alumprofile';

  return (
    <div className="flex flex-col min-h-screen"> {/* Main container with full viewport height */}
      {!shouldHideNavbarAndFooter && <Navbar />}
      
      <div className="flex-grow"> {/* Content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnidirectory" element={<AlumniDirectory />} />
          <Route path="/jobportal" element={<JobPortal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-alumni" element={<AluminiRegistration />} />
          <Route path="/register-college" element={<CollegeRegistration />} />
          <Route path="/register-student" element={<StudentRegistration />} />
          <Route element={<SidebarLayout />}>
            <Route path="/alumprofile" element={<AlumniProfile />} /> 
          </Route>
          <Route path="/signin" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>

      {!shouldHideNavbarAndFooter && <Footer />} {/* Footer placed after content */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
