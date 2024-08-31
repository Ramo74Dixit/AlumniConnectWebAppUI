import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setDropDown(!dropDown);
  };

  const closeDropdown = () => {
    setDropDown(false);
  };

  return (
    <div className="w-full h-[12vh] border shadow-lg flex items-center justify-between px-4 md:px-10 z-50">
      <div className="flex items-center">
        <img
          src="/logo.png"
          className="w-[20vh] h-[10vh] md:w-[30vh] md:h-[12vh]"
          alt="Logo"
        />
        <div className="font-bold text-2xl md:text-xl ml-0 md:ml-0">
          AlumniConnect
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl focus:outline-none">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <div
        className={`hidden md:flex space-x-4 font-normal text-[#8A8A8A] text-lg`}
      >
        <Link to="/" className="relative px-1 py-2 group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/alumnidirectory" className="relative px-1 py-2 group">
          Alumni Directory
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/jobportal" className="relative px-1 py-2 group">
          Job Portal
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/events" className="relative px-1 py-2 group">
          Events
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/donation" className="relative px-1 py-2 group">
          Donation
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative px-1 py-2 group">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div
        className={`md:hidden absolute top-[12vh] left-0 w-full bg-white shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 text-lg font-normal text-[#8A8A8A]">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/alumnidirectory" onClick={toggleMenu}>
            Alumni Directory
          </Link>
          <Link to="/jobportal" onClick={toggleMenu}>
            Job Portal
          </Link>
          <Link to="/events" onClick={toggleMenu}>
            Events
          </Link>
          <Link to="/donation" onClick={toggleMenu}>
            Donation
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
      <div className="hidden md:flex space-x-4">
        <button
          className="border border-green-600 px-4 py-2 rounded text-green-600 hover:shadow-2xl shadow-green-800"
          onClick={toggleDrop}
        >
          Register
        </button>
        {dropDown && (
          <div className="absolute left-1/5 transform -translate-x-1/2 mt-2 bg-[#333] shadow-lg border border-[#555] rounded-lg w-64">
            <Link
              to="/register-college"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As College
            </Link>
            <Link
              to="/register-alumni"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As an Alumni
            </Link>
            <Link
              to="/register-student"
              className="dropdown-item block px-4 py-2 font-medium text-white hover:bg-[#444] transition-transform duration-300 ease-in-out rounded-lg"
              onClick={closeDropdown}
            >
              Register As a Student
            </Link>
          </div>
        )}
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
