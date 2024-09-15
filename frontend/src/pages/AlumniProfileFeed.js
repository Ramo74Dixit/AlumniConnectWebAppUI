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
    setData(alumniData);
    setFilteredData(alumniData);
  }, []);

  useEffect(() => {
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
    setCurrentPage(1);
  }, [selectedRole, selectedSalary, selectedLocation, data]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      <SideAlumNavbar />

      <main className="flex-grow container mx-auto p-6">
        <div className="flex justify-between mb-6">
          <select
            className="border rounded p-2 bg-gray-800 text-gray-200"
            value={selectedRole}
            onChange={e => setSelectedRole(e.target.value)}
          >
            <option value="">Job Role</option>
            {[...new Set(data.map(row => row.jobRole))].map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
          <select
            className="border rounded p-2 bg-gray-800 text-gray-200"
            value={selectedSalary}
            onChange={e => setSelectedSalary(e.target.value)}
          >
            <option value="">Salary</option>
            {[...new Set(data.map(row => row.salary))].map((salary, index) => (
              <option key={index} value={salary}>{salary}</option>
            ))}
          </select>
          <select
            className="border rounded p-2 bg-gray-800 text-gray-200"
            value={selectedLocation}
            onChange={e => setSelectedLocation(e.target.value)}
          >
            <option value="">Location</option>
            {[...new Set(data.map(row => row.location))].map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="p-4 border border-gray-600">Date</th>
                <th className="p-4 border border-gray-600">Profile</th>
                <th className="p-4 border border-gray-600">Description & Salary</th>
                <th className="p-4 border border-gray-600">Location</th>
                <th className="p-4 border border-gray-600">Job Role</th>
                <th className="p-4 border border-gray-600">Ping</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="p-4 border border-gray-600">{row.date}</td>
                  <td className="p-4 border border-gray-600 flex items-center">
                    <img
                      src="https://via.placeholder.com/32"
                      alt="Profile"
                      className="rounded-full w-8 h-8 mr-2 border-2 border-green-500"
                    />
                    {row.username}
                  </td>
                  <td className="p-4 border border-gray-600">
                    {row.description} <br />
                    <strong className="text-green-400">Salary:</strong> {row.salary}
                  </td>
                  <td className="p-4 border border-gray-600">{row.location}</td>
                  <td className="p-4 border border-gray-600">
                    <span className="bg-green-500 text-gray-900 px-2 py-1 rounded-full text-xs">
                      {row.jobRole}
                    </span>
                  </td>
                  <td className="p-4 border border-gray-600">
                    <button className="bg-green-600 text-gray-900 px-4 py-2 rounded hover:bg-green-700">
                      Ping
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="px-3 py-1 mx-1 border rounded bg-gray-800 text-gray-200 hover:bg-gray-700"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === number ? 'bg-green-500 text-gray-900' : 'bg-gray-800 text-gray-200'
              } hover:bg-gray-700`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="px-3 py-1 mx-1 border rounded bg-gray-800 text-gray-200 hover:bg-gray-700"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default AlumniProfileFeed;
