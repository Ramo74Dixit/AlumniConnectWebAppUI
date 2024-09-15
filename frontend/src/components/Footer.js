import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10 w-[100vw]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
        <div>
          <h2 className="text-2xl font-bold">AlumniConnect</h2>
          <p className="mt-2">Built with <span role="img" aria-label="heart" className="animate-pulse">❤️</span> in India for the world</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Stay Connected</h3>
          <p className="mb-1">Sales Inquiries</p>
          <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">sales@alumniconnect.com</p>
          <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">+91-7510029715 (Mon to Fri, 9 AM to 6 PM)</p>
          <p className="mt-4">Support Inquiries</p>
          <p className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">support@alumniconnect.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-telegram"></i></a>
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-discord"></i></a>
            <a href="#" className="hover:scale-110 transition transform duration-300"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Our Solutions</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Hiring</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Engagement</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Assessment</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Our Products</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Proctoring</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Coding Interview Platform</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Mentorship</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Be a Mentor</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Explore Mentors</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Mentorship FAQs</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Mentorship Blogs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Apply</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Internships</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Jobs</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Scholarships</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Learn</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Courses</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Articles</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Workshops</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Practice</h3>
          <ul>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">5 Days Interview Prep</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">Code & Ace Hiring Assessments</a></li>
            <li><a href="#" className="text-gray-300 transition duration-300 ease-in-out hover:text-gray-100">100-Day of Coding Sprint</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
