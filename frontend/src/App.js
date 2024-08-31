<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AlumniDirectory from "./pages/AlumniDirectory";
import JobPortal from "./pages/JobPortal";
import Events from "./pages/Event";
import Donation from "./pages/Donation";
import Contact from "./pages/Contact";
import "./App.css";
import AluminiRegistration from "./components/Registration/AluminiRegistration";
import StudentRegistration from "./components/Registration/StudentRegistration";
import CollegeRegistration from "./components/Registration/CollegeRegistration";

=======
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
import SidebarLayout from './pages/SidebarLayOut'; // Import the new layout component
import AlumniProfile from './pages/AlumniProfile'; // Import AlumniProfile
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
>>>>>>> Stashed changes
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
<<<<<<< Updated upstream
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumnidirectory" element={<AlumniDirectory />} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/regAlumni" element={<RegAlumni />} />
            <Route path="/register-alumni" element={<AluminiRegistration />} />
            <Route path="/register-student" element={<StudentRegistration />} />
            <Route path="/register-college" element={<CollegeRegistration />} />
          </Routes>
        </div>
        <Footer />
=======
        <MainContent />
>>>>>>> Stashed changes
      </Router>
    </div>
  );
}

function MainContent() {
  const location = useLocation(); // useLocation is now inside the Router context

  const shouldHideNavbarAndFooter = 
    location.pathname === '/alumnidirectory' || 
    location.pathname === '/alumprofile';

  return (
    <>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumnidirectory" element={<AlumniDirectory />} />
          <Route path="/jobportal" element={<JobPortal />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<SidebarLayout />}>
            <Route path="/alumprofile" element={<AlumniProfile />} /> 
          </Route>
          <Route path="/signin" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
