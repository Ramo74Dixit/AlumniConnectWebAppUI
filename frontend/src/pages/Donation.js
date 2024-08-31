import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import imgbg from '../assets/donation/bg1.png'; // Background image path
import imcard from '../assets/donation/ic1.png'; // Card image path
import imbg2 from '../assets/donation/paymethod.png'; // Second image path

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState(''); // State for the donation amount
  const [donorName, setDonorName] = useState(''); // State for the donor's name

  const handleDonateNow = () => {
    if (donationAmount && donorName) {
      alert(`Donation Confirmed!\nName: ${donorName}\nAmount: $${donationAmount}`);
    } else {
      alert('Please enter your name and donation amount.');
    }
  };

  const handleAmountClick = (amount) => {
    setDonationAmount(amount); // Set the clicked amount in the textarea
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // Ensure only digits are allowed
      setDonationAmount(value); // Update the state with user input
    }
  };

  const handleNameChange = (event) => {
    setDonorName(event.target.value); // Update the state with the donor's name
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${imgbg})`, // Set background image
          backgroundSize: 'contain',        // Cover the entire screen
          backgroundPosition: 'center',     // Center the background image
          backgroundRepeat: 'no-repeat',    // No repeat for the background image
        }}
      >
        <div className="flex-grow bg-transparent"> {/* Main content div with transparent background */}
          <div className="flex justify-between gap-10">  {/* Align main content and cards section to the sides */}
            
            {/* Main Div Section */}
            <div className="w-[600px] p-6 mt-20">
              <div className="mt-10 ml-10 bg-white bg-opacity-0 p-7 rounded-lg"> {/* Transparent background */}
                <h1 className="text-3xl font-bold">Make the Donation</h1>
                <textarea 
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

              <div className="mt-4 ml-10 bg-white bg-opacity-0 p-7 rounded-lg"> {/* Transparent background */}
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
                  className="bg-green-600 text-white py-2 px-4 rounded mt-4" 
                  onClick={handleDonateNow}
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Cards Section (right-aligned) */}
            <div className="flex flex-col items-end gap-6 mt-10 mr-60 w-[300px]">  {/* Right side */}
              {[
                { title: "Card Title 1", desc: "This is a description of the card content. It can include text, links, or other elements.", img: imcard },
                { title: "Card Title 2", desc: "This is another description of the card content. You can customize this as needed.", img: imcard },
                { title: "Card Title 3", desc: "This is another description of the card content. You can customize this as needed.", img: imcard }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg w-full text-center transition-transform transform hover:-translate-y-2">
                  <img src={card.img} alt={`Image ${index + 1}`} className="w-full" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-700 mb-4">{card.desc}</p>
                    <a href="#" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Div for Additional Image */}
        {
          <div
            className=" ml-10  max-w-2xl"
            style={{ backgroundColor: 'transparent' }}
          >
            <img
              src={imbg2}
              alt="Payment Methods"
              className="w-full object-cover -translate-y-40"
              style={{ backgroundColor: 'transparent'}}

            />
          </div>
        }
      </div>
    </>
  );
};

export default Donation;
