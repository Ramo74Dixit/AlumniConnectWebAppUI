import React from 'react';

const ProfileCard = ({ image, fullName, title, tagline }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-[25vw] ml-40 h-[30vw] bg-white p-6 rounded-lg shadow-2xl shadow-gray-400 transition-all duration-300 transform hover:scale-105 hover:z-10">
      <img 
        src={image} 
        alt={fullName} 
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{fullName}</h2>
      <h4 className="text-gray-600 text-lg mb-2">{title}</h4>
      <p className="text-gray-500 text-center">{tagline}</p>
    </div>
  );
};

export default ProfileCard;
