import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< Updated upstream
    <footer className="bg-gray-800 text-white text-center py-4 w-full relative"> {/* Added mt-8 for spacing */}
=======
    <footer className="bg-gray-800 text-white text-center py-4  w-full relative mt-auto"> {/* Added mt-8 for spacing */}
>>>>>>> Stashed changes
      <div className="mt-5">
    <footer className="bg-gray-800 text-white text-center  py-[10px] mt-8 h-[100px] w-full relative"> {/* Added mt-8 for spacing */}
      <div className="">
        <a href="https://www.facebook.com" className="text-white mx-2 hover:text-gray-400" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-white mx-2 hover:text-gray-400" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com" className="text-white mx-2 hover:text-gray-400" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com" className="text-white mx-2 hover:text-gray-400" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <p>&copy; {currentYear} My Company. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a>
        |
        <a href="/terms-of-service" className="text-white hover:underline mx-2">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
