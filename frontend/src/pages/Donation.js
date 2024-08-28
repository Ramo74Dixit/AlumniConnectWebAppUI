import React from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component

const Donation = () => {
  const handleProceedToPayment = () => {
    alert('Proceeding to Payment');
  };

  const handleDonateNow = () => {
    alert('Donation Confirmed');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100">
        <div className="flex gap-10">
          {/* Main Div Section */}
          <div className="mr-10 w-[400px]">
            <div className="mt-10 ml-10 bg-red-500 p-6">
              <h1 className="text-3xl font-bold">Make the Donation</h1>
              <textarea 
                name="text" 
                id="t1" 
                className="w-full mt-4 p-2 border border-gray-300 rounded" 
                defaultValue="Donation Amount"
              />
              <p className="mt-4 space-x-2">
                {[50, 100, 150, 200].map((amount, index) => (
                  <button key={index} className="bg-blue-500 text-white py-2 px-4 rounded">
                    ${amount}
                  </button>
                ))}
              </p>
              <button 
                className="mt-4 bg-green-600 text-white py-2 px-4 rounded" 
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>

            <div className="mt-4 ml-10 bg-green-500 p-6">
              <h1 className="text-3xl font-bold">Donation Confirmation</h1>
              <p className="mt-2">Thank you for your donation!</p>
              <textarea 
                name="text2" 
                id="t2" 
                className="w-full mt-4 p-2 border border-gray-300 rounded" 
                defaultValue="Donation Amount"
              />
              <p className="mt-4">Total Amount charged:</p>
              <p className="mt-4 space-x-2">
                <button 
                  className="bg-green-600 text-white py-2 px-4 rounded" 
                  onClick={handleDonateNow}
                >
                  Donate Now
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded">
                  Modify
                </button>
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col items-end gap-6 mt-10 mr-10 ml-20">
            {[
              { title: "Card Title 1", desc: "This is a description of the card content. It can include text, links, or other elements.", img: "image73.png" },
              { title: "Card Title 2", desc: "This is another description of the card content. You can customize this as needed.", img: "image73.png" },
              { title: "Card Title 3", desc: "This is another description of the card content. You can customize this as needed.", img: "image73.png" }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg max-w-xs w-full text-center transition-transform transform hover:-translate-y-2">
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
    </div>
  );
};

export default Donation;
