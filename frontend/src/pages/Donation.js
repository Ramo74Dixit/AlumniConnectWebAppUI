import React, { useState } from 'react';
import imgbg from '../assets/donation/bg1.png'; // Background image path
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
      <div
        className="flex flex-col min-h-screen mt-4"
        style={{
          backgroundImage: `url(${imgbg})`, // Set background image
          backgroundSize: 'contain',        // Cover the entire screen
          backgroundPosition: 'center',     // Center the background image
          backgroundRepeat: 'no-repeat',    // No repeat for the background image
        }}
      >
        <div className="flex-grow bg-transparent mt-2"> {/* Main content div with transparent background */}
          <div className="flex justify-between gap-10">  {/* Align main content and cards section to the sides */}
            
            {/* Main Div Section */}
            <div className="w-[600px] p-6 mt-10">
              <div className="mt-10 ml-10 bg-white bg-opacity-0 p-7 rounded-lg"> {/* Transparent background */}
                <h1 className="text-3xl font-bold">Make the Donation</h1>
                <input 
                  name="text" 
                  id="t1" 
                  className="w-full mt-4 p-2 border border-gray-300 rounded" 
                  placeholder="Enter donation amount"  
                  value={donationAmount} // Controlled value for the textarea
                  onChange={handleAmountChange} // Update state with user input
                />
                <p className="mt-4 space-x-2">
                  {[50, 100, 150, 200].map((amount, index) => (
                    <button 
                      key={index} 
                      className="bg-blue-500 text-white py-2 px-4 rounded" 
                      onClick={() => handleAmountClick(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </p>
              </div>

              <div className="mt-3 ml-10 bg-white bg-opacity-0 p-7 rounded-lg"> {/* Transparent background */}
                <h1 className="text-3xl font-bold">Donation Details</h1>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={donorName} // Controlled value for the input field
                  onChange={handleNameChange} // Update state with user input
                  className="w-full mt-4 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Donation Amount"
                  value={donationAmount} // Controlled value for the amount field
                  readOnly // Make the amount field read-only since it is auto-filled
                  className="w-full mt-4 p-2 border border-gray-300 rounded"
                />
                <p className="mt-4">Thank you for your donation!</p>
                <button 
                  className="bg-green-600 text-white py-2 px-4 rounded w-full"
                  onClick={handleDonateNow}
                >
                  Donate Now
                </button>
              </div>
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

          {/* New Div for Additional Image */}
          <div
            className="ml-10 max-w-3xl"
            style={{ backgroundColor: 'transparent' }}
          >
            <img
              src={imbg2}
              alt="Payment Methods"
              className="w-full object-cover -translate-y-60"
              style={{ backgroundColor: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
