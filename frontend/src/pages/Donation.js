import React, { useState } from 'react';
import imbg2 from '../assets/donation/paymethod.png'; // Second image path

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');

  const handleDonateNow = () => {
    if (donationAmount && donorName) {
      alert(`Donation Confirmed!\nName: ${donorName}\nAmount: $${donationAmount}`);
    } else {
      alert('Please enter your name and donation amount.');
    }
  };

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleNameChange = (event) => {
    setDonorName(event.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      {/* Main Donation Section with Intense Glow Effect */}
      <div className="w-full max-w-lg p-6 bg-white bg-opacity-10 shadow-2xl rounded-lg backdrop-filter backdrop-blur-lg border border-white/20 ring-4 ring-cyan-500 shadow-cyan-500/80">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Make a Donation</h1>
        
        {/* Donation Amount Input */}
        <input 
          type="text" 
          className="w-full p-3 mb-4 bg-white bg-opacity-20 text-white border border-white/20 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-500 hover:ring-2 hover:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
          placeholder="Enter donation amount"  
          value={donationAmount}
          onChange={handleAmountChange}
        />
        
        {/* Quick Amount Buttons */}
        <div className="flex justify-around mb-4">
          {[50, 100, 150, 200].map((amount, index) => (
            <button 
              key={index} 
              className="bg-blue-600 text-white py-2 px-4 rounded transition-all duration-500 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => handleAmountClick(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
        
        {/* Donor Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={donorName}
          onChange={handleNameChange}
          className="w-full p-3 mb-4 bg-white bg-opacity-20 text-white border border-white/20 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-500 hover:ring-2 hover:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
        />
        
        {/* Display Donation Amount (Read-Only) */}
        <input
          type="text"
          placeholder="Donation Amount"
          value={donationAmount}
          readOnly
          className="w-full p-3 mb-4 bg-white bg-opacity-20 text-white border border-white/20 rounded transition-all duration-500 hover:ring-2 hover:ring-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
        />
        
        {/* Thank You Message */}
        <p className="text-center mb-4 text-lg font-medium text-gray-300">Thank you for your donation!</p>
        
        {/* Donate Now Button */}
        <button 
          className="w-full bg-green-600 text-white py-2 px-4 rounded transition-all duration-500 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={handleDonateNow}
        >
          Donate Now
        </button>
        
        {/* Payment Methods Image */}
        <div className="mt-8">
          <img
            src={imbg2}
            alt="Payment Methods"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Donation;
