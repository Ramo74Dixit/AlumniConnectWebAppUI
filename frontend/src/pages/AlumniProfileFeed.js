import React, { useEffect, useState } from 'react';
import SideAlumNavbar from './SideAlumNavbar';
import alumniData from '../alumniData.json';

const AlumniProfileFeed = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const rowsPerPage = 10;

  useEffect(() => {
    // Set the data directly from the imported JSON file
    setData(alumniData);
    setFilteredData(alumniData); // Initialize filtered data
  }, []);

  useEffect(() => {
    // Filter data based on selected filters
    let tempData = data;

    if (selectedRole) {
      tempData = tempData.filter(row => row.jobRole === selectedRole);
    }

    if (selectedSalary) {
      tempData = tempData.filter(row => row.salary === selectedSalary);
    }

    if (selectedLocation) {
      tempData = tempData.filter(row => row.location === selectedLocation);
    }

    setFilteredData(tempData);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [selectedRole, selectedSalary, selectedLocation, data]);

  // Calculate indices for slicing the data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Determine which page numbers to display
  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Include the navbar component */}
      <SideAlumNavbar />

      <main className="flex-grow container mx-auto p-4">
        {/* Filters Section */}
        <div className="flex justify-between mb-4">
          <select 
            className="border rounded p-2" 
            value={selectedRole} 
            onChange={e => setSelectedRole(e.target.value)}
          >
            <option value="">Job Role</option>
            {[...new Set(data.map(row => row.jobRole))].map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
          <select 
            className="border rounded p-2" 
            value={selectedSalary} 
            onChange={e => setSelectedSalary(e.target.value)}
          >
            <option value="">Salary</option>
            {[...new Set(data.map(row => row.salary))].map((salary, index) => (
              <option key={index} value={salary}>{salary}</option>
            ))}
          </select>
          <select 
            className="border rounded p-2" 
            value={selectedLocation} 
            onChange={e => setSelectedLocation(e.target.value)}
          >
            <option value="">Location</option>
            {[...new Set(data.map(row => row.location))].map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-4 border">Date</th>
                <th className="p-4 border">Profile</th>
                <th className="p-4 border">Description & Salary</th>
                <th className="p-4 border">Location</th>
                <th className="p-4 border">Job Role</th>
                <th className="p-4 border">Ping</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 border">{row.date}</td>
                  <td className="p-4 border flex items-center">
                    <img
                      src="https://via.placeholder.com/32"
                      alt="Profile"
                      className="rounded-full w-8 h-8 mr-2"
                    />
                    {row.username}
                  </td>
                  <td className="p-4 border">
                    {row.description} <br />
                    <strong>Salary:</strong> {row.salary}
                  </td>
                  <td className="p-4 border">{row.location}</td>
                  <td className="p-4 border">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {row.jobRole}
                    </span>
                  </td>
                  <td className="p-4 border">
                    <button className="bg-green-600 text-white px-4 py-2 rounded">
                      Ping
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            className="px-3 py-1 mx-1 border rounded bg-white"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === number ? 'bg-gray-200' : 'bg-white'
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="px-3 py-1 mx-1 border rounded bg-white"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>

      {/* Include the footer component */}
    </div>
  );
};

export default AlumniProfileFeed;
