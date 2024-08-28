import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AlumniDirectory from './pages/AlumniDirectory';
import JobPortal from './pages/JobPortal';
import Events from './pages/Event';
import Donation from './pages/Donation';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Event from './pages/Event';
>>>>>>> 92927dab02bb800e59c1de30cf22c4a1a496879f
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
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
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
=======
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/event" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
>>>>>>> 92927dab02bb800e59c1de30cf22c4a1a496879f
  );
}

export default App;
