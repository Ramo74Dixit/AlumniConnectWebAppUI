import React, { useState } from 'react';
import imcard from '../assets/donation/ic1.png'; // Card image path
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
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-green-200">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-6 flex-grow">
          
          {/* Main Donation Section */}
          <div className="w-full lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Make a Donation</h1>
            <textarea 
              name="text" 
              id="t1" 
              className="w-full p-3 border border-gray-300 rounded mb-4" 
              placeholder="Enter donation amount"  
              value={donationAmount}
              onChange={handleAmountChange}
            />
            <div className="flex justify-around mb-4">
              {[50, 100, 150, 200].map((amount, index) => (
                <button 
                  key={index} 
                  className="bg-blue-500 text-white py-2 px-4 rounded" 
                  onClick={() => handleAmountClick(amount)}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              value={donorName}
              onChange={handleNameChange}
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Donation Amount"
              value={donationAmount}
              readOnly
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <p className="text-center mb-4">Thank you for your donation!</p>
            <button 
              className="bg-green-600 text-white py-2 px-4 rounded w-full"
              onClick={handleDonateNow}
            >
              Donate Now
            </button>
          </div>
          
          {/* Cards Section */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {[
              { title: "Card Title 1", desc: "This is a description of the card content.", img: imcard },
              { title: "Card Title 2", desc: "This is another description of the card content.", img: imcard },
              { title: "Card Title 3", desc: "This is another description of the card content.", img: imcard }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg text-center p-6">
                <img src={card.img} alt={`Image ${index + 1}`} className="w-full rounded-t-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.desc}</p>
                <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="p-6">
          <img
            src={imbg2}
            alt="Payment Methods"
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Donation;
