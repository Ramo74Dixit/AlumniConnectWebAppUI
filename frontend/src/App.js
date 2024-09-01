import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import JobPortal from './pages/JobPortal';
import Events from './pages/Event';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumnidirectory" element={<AlumniDirectory />} />
            <Route path="/jobportal" element={<JobPortal />} />
            <Route path="/events" element={<Events />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-profile" element={<Student_profile_feed />} /> {/* New Route for Student_profile_feed */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
