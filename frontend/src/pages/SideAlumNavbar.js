import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineCog, HiOutlineLogout, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineCollection } from 'react-icons/hi';

const SideAlumNavbar = () => {
  const [activeLink, setActiveLink] = useState('/profile'); // default active link

  return (
    <div className="fixed top-0 left-0 h-full bg-white shadow-lg w-[250px] flex flex-col space-y-4 p-6 text-green-700 text-lg">
      <Link
        to="/connections"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/connections' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/connections')}
      >
        <HiOutlineAcademicCap className="text-2xl" />
        <span>Connections</span>
      </Link>
      <Link
        to="/jobs"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/jobs' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/jobs')}
      >
        <HiOutlineBriefcase className="text-2xl" />
        <span>Jobs</span>
      </Link>
      <Link
        to="/settings"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/settings' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/settings')}
      >
        <HiOutlineCog className="text-2xl" />
        <span>Settings</span>
      </Link>
      <Link
        to="/alumprofile"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/profile' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/profile')}
      >
        <HiOutlineUser className="text-2xl" />
        <span>Profile</span>
      </Link>
      <Link
        to="/logout"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/logout' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/logout')}
      >
        <HiOutlineLogout className="text-2xl" />
        <span>Log Out</span>
      </Link>
      <Link
        to="/alumni-profile-feed"
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 ${activeLink === '/feed' ? 'bg-gray-200' : ''}`}
        onClick={() => setActiveLink('/feed')}
      >
        <HiOutlineCollection className="text-2xl" />
        <span>Feed</span>
      </Link>
    </div>
  );
};

export default SideAlumNavbar;
